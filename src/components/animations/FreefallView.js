import React, { useState, useMemo, useEffect } from "react";
import { Text, Dimensions, NativeModules } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  Easing,
  lessOrEq,
  call,
  greaterOrEq,
} from "react-native-reanimated";

import { PanGestureHandler, State } from "react-native-gesture-handler";

const { UIManager } = NativeModules;

const {
  diff,
  event,
  Value,
  cond,
  add,
  multiply,
  eq,
  set,
  divide,
  stopClock,
  Clock,
  startClock,
  lessThan,
  greaterThan,
  abs,
  sub,
  and,
  not,
  pow,
  setValue,
  block,
  interpolate,
  useCode,
  timing,
  clockRunning,
} = Animated;

const gestureY = new Value(0);
const state = new Value(-1);
const floor = new Value(0);
const dragging = new Value(0);
const position = new Value(0);
const dropClock = new Clock();
const dt = divide(diff(dropClock), 1000);
const velocity = new Value(0);

const kineticEnergy = new Value(0);

const onGestureEventHandler = event([
  {
    nativeEvent: {
      translationY: gestureY,
      state: state,
    },
  },
]);

function fall(dt, position, velocity, floor, mass = 1) {
  const acceleration = multiply(9.8, 1000);

  return cond(
    lessThan(position, add(floor, 0.5)),
    // if the position of the ball is above the floor,
    // set velocity to v = vo + at
    [
      set(velocity, add(velocity, multiply(acceleration, dt))),
      // call([velocity], ([velocity]) => {
      //   console.log(velocity);
      // }),
      call([position], ([position]) => {
        console.log(position);
      }),
    ],
    //when object hits the "floor" change the direction of velocity
    // object will hit peak when accel slows it down, then fall back into the positive direction
    [set(velocity, multiply(velocity, -0.8))]
  );
}

function interaction(gestureTranslation, gestureState) {
  return cond(
    eq(gestureState, State.ACTIVE),
    [
      cond(dragging, 0, [set(dragging, 1)]),
      stopClock(dropClock),
      dt,
      set(position, cond(lessThan(gestureTranslation, 0), gestureTranslation)),
    ],
    [
      set(dragging, 0),
      startClock(dropClock),
      fall(dt, position, velocity, floor),
      set(position, add(position, multiply(velocity, dt))),
    ]
  );
}

const transY = interaction(gestureY, state);

export default FreefallView = (props) => {
  const { weight, weightArrayLbs, weightArrayKgs } = props;

  useEffect(() => {
    if (weightArrayLbs.length > 1 || weightArrayKgs.length > 1) {
      position.setValue(-120);
    }
  }, [weight]);

  return (
    <Animated.View
      style={[
        {
          transform: [{ translateY: transY }],
        },
      ]}
    >
      {props.children}
    </Animated.View>
  );
};

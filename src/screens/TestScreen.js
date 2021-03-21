import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, NativeModules, Button } from "react-native";
import {
  PanGestureHandler,
  State,
  TextInput,
} from "react-native-gesture-handler";
import Animated, { greaterOrEq, lessOrEq } from "react-native-reanimated";
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
} = Animated;

const VELOCITY_THRESHOLD = 0.5;
const POSITION_THRESHOLD = 0.5;

const gestureY = new Value(0);
const state = new Value(-1);

const floor = new Value(0);
const dragging = new Value(0);
const position = new Value(0);
const clock = new Clock();
const dt = divide(diff(clock), 1000);
const velocity = new Value(0);

const onGestureEventHandler = event([
  {
    nativeEvent: {
      translationY: gestureY,
      state: state,
    },
  },
]);

function fall(dt, position, velocity, floor) {
  const acceleration = multiply(9.8, 1000);

  return cond(
    lessThan(position, floor),
    [set(velocity, add(velocity, multiply(acceleration, dt)))],
    [cond(greaterThan(velocity, 0), [set(velocity, multiply(velocity, -0.45))])]
  );
}

function interaction(gestureTranslation, gestureState) {
  return cond(
    eq(gestureState, State.ACTIVE),
    [
      cond(dragging, 0, [set(dragging, 1)]),
      stopClock(clock),
      dt,
      set(position, cond(lessThan(gestureTranslation, 0), gestureTranslation)),
    ],
    [
      set(dragging, 0),
      startClock(clock),
      fall(dt, position, velocity, floor),
      set(position, add(position, multiply(velocity, dt))),
    ]
  );
}

const transY = interaction(gestureY, state);

export default TestScreen = () => {
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    position.setValue(-200);
    console.log(textValue);
  }, [textValue]);

  return (
    <>
      <PanGestureHandler
        onGestureEvent={onGestureEventHandler}
        onHandlerStateChange={onGestureEventHandler}
      >
        <Animated.View
          style={[
            styles.container,
            styles.box,
            {
              transform: [{ translateY: transY }],
            },
          ]}
        ></Animated.View>
      </PanGestureHandler>
      <TextInput
        value={textValue}
        onChangeText={(value) => {
          setTextValue(value);
        }}
        style={{
          height: 30,
          width: 100,
          backgroundColor: "#ddd",
          textAlign: "center",
        }}
      ></TextInput>
      <Button
        title={"Press"}
        onPress={() => {
          position.setValue(-100);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 50,
    width: 50,
    backgroundColor: "teal",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

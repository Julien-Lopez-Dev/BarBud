import { useLinkProps } from "@react-navigation/native";
import React, { useState, useMemo, useEffect } from "react";
import { Text, Dimensions, NativeModules, StyleSheet } from "react-native";
import Animated, { Extrapolate, Easing } from "react-native-reanimated";

const {
  Value,
  cond,
  set,
  stopClock,
  Clock,
  startClock,
  block,
  interpolate,
  useCode,
  timing,
  clockRunning,
} = Animated;

function runTiming(clock, from, to) {
  const state = {
    finished: new Value(0),
    position: new Value(from),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 300,
    toValue: new Value(to),
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(clockRunning(clock), [], startClock(clock)),
    // we run the step here that is going to update position
    timing(clock, state, config),
    // if the animation is over we stop the clock
    cond(state.finished, stopClock(clock)),
    // we made the block return the updated position
    state.position,
  ]);
}

export default TransformingView = (props) => {
  const { pressed } = props;

  const { clock, scale } = useMemo(
    () => ({
      clock: new Clock(),
      scale: new Value(1),
    }),
    []
  );

  useCode(
    () =>
      block([
        pressed
          ? set(scale, runTiming(clock, 0, 1))
          : set(scale, runTiming(clock, 1, 0)),
      ]),
    [pressed]
  );

  const scaling = interpolate(scale, {
    inputRange: [0, 1],
    outputRange: [1, props.scaleTo],
    extrapolate: Extrapolate.CLAMP,
  });

  const translationX = interpolate(scale, {
    inputRange: [0, 1],
    outputRange: [1, props.translateXTo],
    extrapolate: Extrapolate.CLAMP,
  });

  const translationY = interpolate(scale, {
    inputRange: [0, 1],
    outputRange: [1, props.translateYTo],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={{
        ...props.style,
        transform: [
          {
            scaleX: scaling,
            scaleY: scaling,
            translateX: translationX,
            translateY: translationY,
          },
        ],
      }}
    >
      {props.children}
    </Animated.View>
  );
};

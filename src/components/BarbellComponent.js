import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import Animated from "react-native-reanimated";

import PlateComponent from "./PlateComponent";

export default BarbellComponent = (props) => {
  const { width, height } = Dimensions.get("window");

  const { weightShown, weightUnit } = props;

  const BARBELL_WIDTH = props.weight > 585 ? width * 0.85 : width * 0.95;
  const BARBELL_DIAMETER = BARBELL_WIDTH * 0.0127;
  const COLLAR_WIDTH = BARBELL_WIDTH * 0.189;
  const COLLAR_HEIGHT = BARBELL_WIDTH * 0.0248;
  const OUTER_COLLAR_WIDTH = BARBELL_WIDTH * 0.02;
  const OUTER_COLLAR_HEIGHT = BARBELL_WIDTH * 0.04;

  const weightValue = props.weight;

  const PLATE_HEIGHT = BARBELL_WIDTH * 0.215;

  plateArray = props.weightArray;

  return (
    <Animated.View
      style={{
        flexDirection: "row",
        width: BARBELL_WIDTH,
        height: PLATE_HEIGHT,
        alignItems: "center",
      }}
    >
      {/* START LEFT SIDE HERE */}
      <Animated.View
        style={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Animated.View
          style={{
            width: COLLAR_WIDTH,
            height: COLLAR_HEIGHT,
            backgroundColor: "lightgray",
          }}
        />
        <Animated.View
          style={{
            flexDirection: "row-reverse",
            alignItems: "center",
            position: "absolute",
            width: COLLAR_WIDTH,
          }}
        >
          {plateArray.map(({ weight }, index) => {
            return (
              <PlateComponent
                weightValue={weightValue}
                showWeight={weightShown}
                key={index}
                weight={weight}
                {...{ BARBELL_WIDTH, weightUnit }}
              />
            );
          })}
        </Animated.View>
        <Animated.View
          style={{
            width: OUTER_COLLAR_WIDTH,
            height: OUTER_COLLAR_HEIGHT,
            backgroundColor: "lightgray",
          }}
        />
      </Animated.View>
      {/* END LEFT SIDE HERE */}
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: "lightgray",
          height: BARBELL_DIAMETER,
        }}
      />
      {/* START RIGHT SIDE */}
      <Animated.View
        style={{
          alignItems: "center",
          flexDirection: "row-reverse",
        }}
      >
        <Animated.View
          style={{
            width: COLLAR_WIDTH,
            height: COLLAR_HEIGHT,
            backgroundColor: "lightgray",
          }}
        />
        <Animated.View
          style={{
            flexDirection: "row",
            position: "absolute",
            alignItems: "center",

            width: COLLAR_WIDTH,
          }}
        >
          {plateArray.map(({ weight }, index) => {
            return (
              <PlateComponent
                weightValue={weightValue}
                showWeight={weightShown}
                key={index}
                weight={weight}
                {...{ BARBELL_WIDTH, weightUnit }}
              />
            );
          })}
        </Animated.View>
        <Animated.View
          style={{
            width: OUTER_COLLAR_WIDTH + 1,
            height: OUTER_COLLAR_HEIGHT,
            backgroundColor: "lightgray",
          }}
        />
      </Animated.View>
      {/* END RIGHT SIDE */}
    </Animated.View>
  );
};

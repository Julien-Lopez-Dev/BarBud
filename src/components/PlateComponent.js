import React from "react";
import { Dimensions, View, StyleSheet, Text } from "react-native";
import Animated from "react-native-reanimated";

export default PlateComponent = (props) => {
  const { BARBELL_WIDTH } = props;
  const { weightValue, weightUnit } = props;

  const PLATE_HEIGHT = BARBELL_WIDTH * 0.215;

  const styles = StyleSheet.create({
    plate_45: {
      height: PLATE_HEIGHT,
      width: weightValue < 585 ? PLATE_HEIGHT / 6 : PLATE_HEIGHT / 10,
      backgroundColor: "#e84338",
      justifyContent: "flex-start",
      borderRadius: 2,
      marginRight: 0.75,
    },
    plate_35: {
      height: PLATE_HEIGHT,
      width: weightValue < 585 ? PLATE_HEIGHT / 7 : PLATE_HEIGHT / 12,
      backgroundColor: "#d3db35",
      justifyContent: "flex-start",
      borderRadius: 2,
      marginRight: 0.75,
    },
    plate_25: {
      height: PLATE_HEIGHT,
      width: weightValue < 585 ? PLATE_HEIGHT / 7 : PLATE_HEIGHT / 12,
      backgroundColor: "#2272d4",
      justifyContent: "flex-start",
      borderRadius: 2,
      marginRight: 0.75,
    },
    plate_10: {
      height: PLATE_HEIGHT,
      width: weightValue < 585 ? PLATE_HEIGHT / 10 : PLATE_HEIGHT / 14,
      backgroundColor: "#269e2c",
      justifyContent: "flex-start",
      borderRadius: 2,
      marginRight: 0.75,
    },
    plate_5: {
      height: PLATE_HEIGHT / 1.85,
      width: weightValue < 585 ? PLATE_HEIGHT / 12 : PLATE_HEIGHT / 16,
      backgroundColor: "white",
      justifyContent: "flex-start",
      borderRadius: 2,
      marginRight: 0.75,
    },
    plate_2andHalf: {
      height: PLATE_HEIGHT / 3,
      width: weightValue < 585 ? PLATE_HEIGHT / 12 : PLATE_HEIGHT / 16,
      backgroundColor: "gray",
      justifyContent: "flex-start",
      borderRadius: 2,
      marginRight: 0.75,
    },
    plate_25kg: {
      height: PLATE_HEIGHT,
      width: weightValue < 585 ? PLATE_HEIGHT / 11 : PLATE_HEIGHT / 12,
      backgroundColor: "#e84338",
      justifyContent: "flex-start",
      marginRight: 0.75,
    },
    plate_20kg: {
      height: PLATE_HEIGHT,
      width: weightValue < 585 ? PLATE_HEIGHT / 12 : PLATE_HEIGHT / 12,
      backgroundColor: "#d3db35",
      justifyContent: "flex-start",
      marginRight: 0.75,
    },
    plate_15kg: {
      height: PLATE_HEIGHT * 0.9,
      width: weightValue < 585 ? PLATE_HEIGHT / 12 : PLATE_HEIGHT / 13,
      backgroundColor: "#2272d4",
      justifyContent: "flex-start",
      marginRight: 0.75,
    },
    plate_10kg: {
      height: PLATE_HEIGHT * 0.8,
      width: weightValue < 585 ? PLATE_HEIGHT / 13 : PLATE_HEIGHT / 13,
      backgroundColor: "#269e2c",
      justifyContent: "flex-start",
      marginRight: 0.75,
    },
    plate_5kg: {
      height: PLATE_HEIGHT * 0.85,
      width: weightValue < 585 ? PLATE_HEIGHT / 16 : PLATE_HEIGHT / 16,
      backgroundColor: "white",
      justifyContent: "flex-start",
      marginRight: 0.75,
    },
    plate_2andHalfkg: {
      height: PLATE_HEIGHT / 3,
      width: weightValue < 585 ? PLATE_HEIGHT / 20 : PLATE_HEIGHT / 16,
      backgroundColor: "black",
      justifyContent: "flex-start",
      marginRight: 0.75,
    },
    plate_1quarterkg: {
      height: PLATE_HEIGHT / 4,
      width: weightValue < 585 ? PLATE_HEIGHT / 20 : PLATE_HEIGHT / 16,
      backgroundColor: "#bec2cb",
      justifyContent: "flex-start",
      marginRight: 0.75,
    },
    plate_halfkg: {
      height: PLATE_HEIGHT / 4,
      width: weightValue < 585 ? PLATE_HEIGHT / 25 : PLATE_HEIGHT / 16,
      backgroundColor: "#bec2cb",
      justifyContent: "flex-start",
      marginRight: 0.75,
    },
    plate_quarterkg: {
      height: PLATE_HEIGHT / 5,
      width: weightValue < 585 ? PLATE_HEIGHT / 25 : PLATE_HEIGHT / 16,
      backgroundColor: "#bec2cb",
      justifyContent: "flex-start",
      marginRight: 0.75,
    },
    weightFont: { fontSize: 8, textAlign: "center", color: "white" },
    weightFontSmall: { fontSize: 6, textAlign: "center", color: "white" },
    weightFontSmallest: { fontSize: 4, textAlign: "center", color: "white" },
    weightFontSmallestBlack: {
      fontSize: 4,
      textAlign: "center",
      color: "black",
    },
    weightFontSmallBlack: { fontSize: 8, textAlign: "center", color: "black" },
    weightFontKg: {
      fontSize: 6,
      textAlign: "center",
      color: "white",
    },
    weightFontKgSmall: {
      fontSize: 2,
      textAlign: "center",
      color: "white",
    },
    weightFontKgSmallest: {
      fontSize: 2,
      textAlign: "center",
      color: "white",
    },
  });

  if (weightUnit === "lbs") {
    switch (props.weight) {
      case 45:
        return (
          <Animated.View style={styles.plate_45}>
            <Text
              style={
                weightValue < 585
                  ? styles.weightFont
                  : styles.weightFontSmallest
              }
            >
              {props.showWeight ? "45" : ""}
            </Text>
          </Animated.View>
        );
        break;
      case 35:
        return (
          <Animated.View style={styles.plate_35}>
            <Text
              style={
                weightValue < 585
                  ? styles.weightFont
                  : styles.weightFontSmallest
              }
            >
              {props.showWeight ? "35" : ""}
            </Text>
          </Animated.View>
        );
        break;
      case 25:
        return (
          <Animated.View style={styles.plate_25}>
            <Text
              style={
                weightValue < 585
                  ? styles.weightFont
                  : styles.weightFontSmallest
              }
            >
              {props.showWeight ? "25" : ""}
            </Text>
          </Animated.View>
        );
        break;
      case 10:
        return (
          <Animated.View style={styles.plate_10}>
            <Text
              style={
                weightValue < 585
                  ? styles.weightFontSmall
                  : styles.weightFontSmallest
              }
            >
              {props.showWeight ? "10" : ""}
            </Text>
          </Animated.View>
        );
        break;
      case 5:
        return (
          <Animated.View style={styles.plate_5}>
            <Text
              style={
                weightValue < 585
                  ? styles.weightFontSmallBlack
                  : styles.weightFontSmallestBlack
              }
            >
              {props.showWeight ? "5" : ""}
            </Text>
          </Animated.View>
        );
        break;
      case 2.5:
        return (
          <Animated.View style={styles.plate_2andHalf}>
            <Text
              style={
                weightValue < 585
                  ? styles.weightFontSmallest
                  : styles.weightFontSmallest
              }
            >
              {props.showWeight ? "2.5" : ""}
            </Text>
          </Animated.View>
        );
        break;
      default:
    }
  } else if (weightUnit === "kgs") {
    // START KGS
    switch (props.weight) {
      case 25:
        return (
          <Animated.View style={styles.plate_25kg}>
            <Text style={styles.weightFontKg}>
              {props.showWeight ? "25" : ""}
            </Text>
          </Animated.View>
        );
        break;
      case 20:
        return (
          <Animated.View style={styles.plate_20kg}>
            <Text style={styles.weightFontKg}>
              {props.showWeight ? "20" : ""}
            </Text>
          </Animated.View>
        );
        break;
      case 15:
        return (
          <Animated.View style={styles.plate_15kg}>
            <Text style={styles.weightFontKg}>
              {props.showWeight ? "15" : ""}
            </Text>
          </Animated.View>
        );
        break;
      case 10:
        return (
          <Animated.View style={styles.plate_10kg}>
            <Text style={styles.weightFontKg}>
              {props.showWeight ? "10" : ""}
            </Text>
          </Animated.View>
        );
        break;
      case 5:
        return (
          <Animated.View style={styles.plate_5kg}>
            <Text style={styles.weightFontKgSmall}>
              {props.showWeight ? "5" : ""}
            </Text>
          </Animated.View>
        );
        break;
      case 2.5:
        return (
          <Animated.View style={styles.plate_2andHalfkg}>
            <Text style={styles.weightFontKgSmallest}>
              {props.showWeight ? "2.5" : ""}
            </Text>
          </Animated.View>
        );
        break;
      case 1.25:
        return (
          <Animated.View style={styles.plate_1quarterkg}>
            <Text style={styles.weightFontKgSmallest}>
              {props.showWeight ? "1.25" : ""}
            </Text>
          </Animated.View>
        );
        break;
      case 0.5:
        return (
          <Animated.View style={styles.plate_halfkg}>
            <Text style={styles.weightFontKgSmallest}>
              {props.showWeight ? "0.5" : ""}
            </Text>
          </Animated.View>
        );
        break;
      case 0.25:
        return (
          <Animated.View style={styles.plate_quarterkg}>
            <Text style={styles.weightFontKgSmallest}>
              {props.showWeight ? "0.25" : ""}
            </Text>
          </Animated.View>
        );
        break;
      default:
    }
  }
};

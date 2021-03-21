import React, { useState, useMemo, useEffect } from "react";
import {
  Text,
  Dimensions,
  NativeModules,
  Modal,
  View,
  StyleSheet,
  Button,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import BarbellComponent from "../components/BarbellComponent";

import { SimpleLineIcons } from "@expo/vector-icons";

import FreefallView from "../components/animations/FreefallView";
import TransformingView from "../components/animations/TransformingView";
import { LinearGradient } from "expo-linear-gradient";

export default WeightScreen = (props) => {
  const { setFocused } = props;
  const [weightArrayLbs, setWeightArrayLbs] = useState([]);
  const [weightArrayKgs, setWeightArrayKgs] = useState([]);

  const [weight, setWeight] = useState("");
  const [pressed, setPressed] = useState(false);
  const [weightShown, setWeightShown] = useState(false);
  const [weightUnit, setWeightUnit] = useState("lbs");

  const [modalVisibility, setModalVisibility] = useState(false);

  const { width, height } = Dimensions.get("window");

  const calculateWeight = (value) => {
    let plate_45;
    let plate_35;
    let plate_25;
    let plate_10;
    let plate_5;
    let plate_2andHalf;

    let plate_kg_25;
    let plate_kg_20;
    let plate_kg_15;
    let plate_kg_10;
    let plate_kg_5;
    let plate_kg_2andHalf;
    let plate_kg_1quarter;
    let plate_kg_half;
    let plate_kg_quarter;

    if (weightUnit === "lbs") {
      let actualWeight = (value - 45) / 2;

      if (actualWeight < 0) actualWeight = 0;

      while (actualWeight >= 2.5) {
        if (actualWeight >= 45) {
          plate_45 = Math.floor(actualWeight / 45);
          actualWeight = actualWeight - 45 * plate_45;
        } else if (actualWeight < 45 && actualWeight >= 35) {
          plate_35 = Math.floor(actualWeight / 35);
          actualWeight = actualWeight - 35 * plate_35;
        } else if (actualWeight < 35 && actualWeight >= 25) {
          plate_25 = Math.floor(actualWeight / 25);
          actualWeight = actualWeight - 25 * plate_25;
        } else if (actualWeight < 25 && actualWeight >= 10) {
          plate_10 = Math.floor(actualWeight / 10);
          actualWeight = actualWeight - 10 * plate_10;
        } else if (actualWeight < 10 && actualWeight >= 5) {
          plate_5 = Math.floor(actualWeight / 5);
          actualWeight = actualWeight - 5 * plate_5;
        } else if (actualWeight < 5 && actualWeight >= 2.5) {
          plate_2andHalf = actualWeight / 2.5;
          actualWeight = actualWeight - 2.5 * plate_2andHalf;
          actualWeight = 0;
        }
      }

      let tempArray = [];

      tempArray = createArrayLbs(
        plate_45,
        plate_35,
        plate_25,
        plate_10,
        plate_5,
        plate_2andHalf
      );

      setWeightArrayLbs(tempArray);
    } else if (weightUnit === "kgs") {
      let actualWeight = (value - 20) / 2;

      if (actualWeight < 0) actualWeight = 0;

      while (actualWeight >= 0.25) {
        if (actualWeight >= 25) {
          plate_kg_25 = Math.floor(actualWeight / 25);
          actualWeight = actualWeight - 25 * plate_kg_25;
        } else if (actualWeight >= 20) {
          plate_kg_20 = Math.floor(actualWeight / 20);
          actualWeight = actualWeight - 20 * plate_kg_20;
        } else if (actualWeight >= 15) {
          plate_kg_15 = Math.floor(actualWeight / 15);
          actualWeight = actualWeight - 15 * plate_kg_15;
        } else if (actualWeight >= 10) {
          plate_kg_10 = Math.floor(actualWeight / 10);
          actualWeight = actualWeight - 10 * plate_kg_10;
        } else if (actualWeight >= 5) {
          plate_kg_5 = Math.floor(actualWeight / 5);
          actualWeight = actualWeight - 5 * plate_kg_5;
        } else if (actualWeight >= 2.5) {
          plate_kg_2andHalf = Math.floor(actualWeight / 2.5);
          actualWeight = actualWeight - 2.5 * plate_kg_2andHalf;
        } else if (actualWeight >= 1.25) {
          plate_kg_1quarter = Math.floor(actualWeight / 1.25);
          actualWeight = actualWeight - 1.25 * plate_kg_1quarter;
        } else if (actualWeight >= 0.5) {
          plate_kg_half = Math.floor(actualWeight / 0.5);
          actualWeight = actualWeight - 0.5 * plate_kg_half;
        } else if (actualWeight >= 0.25) {
          plate_kg_quarter = Math.floor(actualWeight / 0.25);
          actualWeight = actualWeight - 10 * plate_kg_quarter;
          actualWeight = 0;
        }
      }

      let tempArray = [];

      tempArray = createArrayKgs(
        plate_kg_25,
        plate_kg_20,
        plate_kg_15,
        plate_kg_10,
        plate_kg_5,
        plate_kg_2andHalf,
        plate_kg_1quarter,
        plate_kg_half,
        plate_kg_quarter
      );

      setWeightArrayKgs(tempArray);
    }
  };

  const createArrayKgs = (
    plate_kg_25,
    plate_kg_20,
    plate_kg_15,
    plate_kg_10,
    plate_kg_5,
    plate_kg_2andHalf,
    plate_kg_1quarter,
    plate_kg_half,
    plate_kg_quarter
  ) => {
    let newArray = [];

    for (let i = 0; i < plate_kg_25; i++) {
      newArray.push({ weight: 25 });
    }
    for (let i = 0; i < plate_kg_20; i++) {
      newArray.push({ weight: 20 });
    }
    for (let i = 0; i < plate_kg_15; i++) {
      newArray.push({ weight: 15 });
    }
    for (let i = 0; i < plate_kg_10; i++) {
      newArray.push({ weight: 10 });
    }
    for (let i = 0; i < plate_kg_5; i++) {
      newArray.push({ weight: 5 });
    }
    for (let i = 0; i < plate_kg_2andHalf; i++) {
      newArray.push({ weight: 2.5 });
    }
    for (let i = 0; i < plate_kg_1quarter; i++) {
      newArray.push({ weight: 1.25 });
    }
    for (let i = 0; i < plate_kg_half; i++) {
      newArray.push({ weight: 0.5 });
    }
    for (let i = 0; i < plate_kg_quarter; i++) {
      newArray.push({ weight: 0.25 });
    }

    return newArray;
  };

  const createArrayLbs = (
    plate_45,
    plate_35,
    plate_25,
    plate_10,
    plate_5,
    plate_2andHalf
  ) => {
    let newArray = [];

    for (let i = 0; i < plate_45; i++) {
      newArray.push({ weight: 45 });
    }
    for (let i = 0; i < plate_35; i++) {
      newArray.push({ weight: 35 });
    }
    for (let i = 0; i < plate_25; i++) {
      newArray.push({ weight: 25 });
    }
    for (let i = 0; i < plate_10; i++) {
      newArray.push({ weight: 10 });
    }
    for (let i = 0; i < plate_5; i++) {
      newArray.push({ weight: 5 });
    }
    for (let i = 0; i < plate_2andHalf; i++) {
      newArray.push({ weight: 2.5 });
    }

    return newArray;
  };

  return (
    <Animated.View
      style={{
        ...props.style,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Modal animationType="fade" transparent={true} visible={modalVisibility}>
        <View
          style={{
            ...StyleSheet.absoluteFill,
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        ></View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={modalVisibility}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: width * 0.8,
              height: height * 0.75,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              elevation: 10,
            }}
          >
            <View
              style={{
                flex: 4,
                padding: 10,
                alignContent: "center",
                width: "100%",
              }}
            >
              <LinearGradient
                start={[0, 0.2]}
                end={[0, 1]}
                colors={["#0b8fd6", "#02B5FC"]}
                style={{
                  ...StyleSheet.absoluteFill,
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                }}
              />
              <Text style={{ color: "#fff", fontSize: 36, fontWeight: "bold" }}>
                {"One Rep Max"}
              </Text>
            </View>
            <View
              style={{
                flex: 6,
                backgroundColor: "white",
                width: "100%",
                padding: 20,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
              }}
            >
              <Text>{"Content"}</Text>
              <Button
                title={"Press Me"}
                onPress={() => {
                  setModalVisibility(!modalVisibility);
                }}
              ></Button>
            </View>
          </View>
        </View>
      </Modal>
      <FreefallView {...{ weight, weightArrayLbs, weightArrayKgs }}>
        <TransformingView
          style={{ margin: 30 }}
          scaleTo={2.3}
          translateXTo={-width / 2.65}
          {...{ pressed }}
        >
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center", width }}
            onPress={() => {
              // setWeightShown(!weightShown);
              setPressed(!pressed);
            }}
            onLongPress={() => {
              setWeightShown(!weightShown);
            }}
          >
            <BarbellComponent
              weightArray={
                weightUnit === "lbs" ? weightArrayLbs : weightArrayKgs
              }
              {...{ weightUnit, weight, weightShown }}
            />
          </TouchableOpacity>
        </TransformingView>
      </FreefallView>

      <Animated.View
        style={[
          { flexDirection: "row", margin: 30, paddingLeft: width * 0.125 },
        ]}
      >
        <TextInput
          style={{
            width: width * 0.4,
            height: 40,
            backgroundColor: "#eceeee",
            textAlign: "center",
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            fontSize: 16,
          }}
          keyboardType="numeric"
          onChangeText={(value) => {
            setWeight(value);
            calculateWeight(value);
          }}
          // onFocus={() => {
          //   setFocused(true);
          //   setPressed(true);
          // }}
          // onEndEditing={() => {
          //   setFocused(false);
          //   setPressed(false);
          // }}
          value={weight.toString()}
        />
        <TouchableOpacity
          onPress={() => {
            weightUnit === "lbs" ? setWeightUnit("kgs") : setWeightUnit("lbs");
            setWeightArrayKgs([]);
            setWeightArrayLbs([]);
            setWeight("");
          }}
          style={{
            flex: 1,
            width: width * 0.125,
            height: 40,
            backgroundColor: "#cbcccc",
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}
        >
          <Text style={{ fontSize: 16 }}>{weightUnit}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPressed(!pressed);
            setFocused(true);
          }}
          style={{
            flex: 1,
            width: width * 0.125,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}
        >
          <SimpleLineIcons name="magnifier-add" size={20} color="white" />
        </TouchableOpacity>
      </Animated.View>
      <Button
        title={"Make Visible"}
        onPress={() => {
          setModalVisibility(true);
        }}
      ></Button>
    </Animated.View>
  );
};

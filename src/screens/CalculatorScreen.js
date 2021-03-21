import { Picker } from "@react-native-community/picker";
import React, { useRef, useState } from "react";
import { View, Text, Dimensions } from "react-native";

import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";

import Animated, { Transition, Transitioning } from "react-native-reanimated";
import { FontAwesome5 } from "@expo/vector-icons";

import InputCompenent from "../components/CalculatorScreen/InputComponent";
import PercentList from "../components/CalculatorScreen/PercentList";

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={100} />
    <Transition.Change></Transition.Change>
    <Transition.Out type="fade" durationMs={100} />
  </Transition.Together>
);

export default CalculatorScreen = (props) => {
  const { width, height } = Dimensions.get("window");
  const {
    isFocused,
    setFocused,
    backgroundColor,
    calculatorBackgroundColor,
  } = props;

  const [weightUnit, setWeightUnit] = useState("lbs");
  const [listActive, setListActive] = useState(false);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState();
  const [oneRepMax, setOneRepMax] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const ref = useRef();

  return (
    <Animated.View style={{ ...props.style }}>
      <Transitioning.View transition={transition} ref={ref}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
          }}
        >
          <Animated.View
            style={{
              position: "absolute",
              width: width * 2,
              height: width * 2,
              backgroundColor: calculatorBackgroundColor,
              bottom: width / 1.15,
              borderRadius: width * 2,
            }}
          />
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: 120,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                textAlignVertical: "bottom",
                fontSize: 120,
                fontWeight: "bold",
                color: "#333533",
              }}
            >
              {isNaN(weight)
                ? "?"
                : Math.ceil(Math.floor(weight / multiplier) / 5) * 5}
            </Text>
            <Text
              style={{
                fontSize: 28,
                color: "#333533",
                textAlignVertical: "bottom",
              }}
            >
              lbs / kgs
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <InputCompenent
                style={{ flex: 1, marginHorizontal: 20 }}
                label={"lbs / kgs"}
              >
                <TextInput
                  editable={!listActive}
                  onFocus={() => {
                    ref.current.animateNextTransition();
                    setListActive(false);
                    setFocused(true);
                  }}
                  onEndEditing={() => {
                    ref.current.animateNextTransition();
                    setFocused(false);
                  }}
                  keyboardType={"numeric"}
                  onChangeText={(value) => {
                    setWeight(value);
                  }}
                  style={{
                    textAlign: "center",
                    height: listActive ? 35 : 40,
                    backgroundColor: listActive ? "#ddd" : "#fff",
                    borderRadius: 5,
                  }}
                />
              </InputCompenent>
              <InputCompenent
                style={{ flex: 1, marginHorizontal: 20 }}
                label={"reps"}
              >
                <View
                  style={{
                    height: listActive ? 35 : 40,
                    borderRadius: 5,
                    backgroundColor: "#fff",
                    justifyContent: "center",
                  }}
                >
                  <Picker
                    mode={"dropdown"}
                    style={{
                      height: 20,
                      borderRadius: 5,
                      textAlign: "center",
                    }}
                    onValueChange={(itemValue) => {
                      setReps(itemValue);
                      setMultiplier(itemValue);
                    }}
                    selectedValue={reps}
                  >
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={0.94} />
                    <Picker.Item label="3" value={0.91} />
                    <Picker.Item label="4" value={0.88} />
                    <Picker.Item label="5" value={0.86} />
                    <Picker.Item label="6" value={0.83} />
                    <Picker.Item label="7" value={0.82} />
                    <Picker.Item label="8" value={0.78} />
                    <Picker.Item label="9" value={0.77} />
                    <Picker.Item label="10" value={0.75} />
                    <Picker.Item label="11" value={0.75} />
                    <Picker.Item label="12" value={0.72} />
                  </Picker>
                </View>
              </InputCompenent>
              <TouchableOpacity
                disabled={isFocused}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#ffd000",
                  width: 35,
                  borderRadius: 5,
                  height: 35,
                  elevation: 4,
                }}
                onPress={() => {
                  ref.current.animateNextTransition();
                  setListActive(!listActive);
                }}
              >
                <FontAwesome5 name="percent" size={18} color="#333533" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Animated.View
          style={{
            flex: listActive ? 2 : 0,
            backgroundColor: backgroundColor,
            alignItems: "center",
            width,
            paddingTop: listActive ? 2 : 0,
          }}
        >
          <PercentList {...{ weight, listActive, width, height, multiplier }} />
        </Animated.View>
      </Transitioning.View>
    </Animated.View>
  );
};

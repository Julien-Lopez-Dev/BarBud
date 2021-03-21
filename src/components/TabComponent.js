import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import Animated from "react-native-reanimated";

export default TabComponent = (props) => {
  return (
    <Animated.View style={{ ...props.style, backgroundColor: props.tabColor }}>
      <TouchableOpacity
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={props.onPressHandler}
      >
        <Ionicons name={props.icon} size={36} color="black" />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

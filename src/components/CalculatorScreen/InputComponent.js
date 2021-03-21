import React from "react";
import {
  View,
  TextInput,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Animated from "react-native-reanimated";

export default InputComponent = (props) => {
  const { width } = Dimensions.get("window");
  const { weight } = props;

  return (
    <View style={{ ...props.style, width: width / 4 }}>
      {props.children}
      <Text style={{ textAlign: "center", color: "#333533" }}>
        {props.label}
      </Text>
    </View>
  );
};

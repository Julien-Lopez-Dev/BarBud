import React from "react";
import { View, Text } from "react-native";

export default ListItem = (props) => {
  const divisor = parseFloat(props.percentage) / 100;
  const max = Math.ceil(Math.floor(props.weight / props.multiplier) / 5) * 5;
  const calculatedWeight = Math.ceil(Math.floor(max * divisor) / 5) * 5;

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#ffd000",
        height: props.listActive ? 45 : 0,
        marginHorizontal: 5,
        borderRadius: 5,
        marginBottom: props.listActive ? 2.5 : 0,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginHorizontal: 20,
            flex: 1,
            textAlignVertical: "center",
            fontSize: 16,
            color: "#333533",
            fontWeight: "bold",
          }}
        >
          {props.percentage}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          marginLeft: 5,
        }}
      >
        <Text
          style={{
            marginHorizontal: 20,
            textAlign: "center",
            textAlignVertical: "center",
            fontSize: 16,
            color: "#333533",
          }}
        >
          {isNaN(calculatedWeight) ? "?" : calculatedWeight.toString() + " lbs"}
        </Text>
      </View>
    </View>
  );
};

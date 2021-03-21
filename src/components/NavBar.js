import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import Tab from "./TabComponent";

export default NavBar = (props) => {
  const { width, height } = Dimensions.get("window");
  const { isFocused } = props;

  return (
    <View
      style={{
        ...styles.bar,
        flexDirection: "row",
        width: width * 0.8,
        height: height * 0.08,
        marginVertical: height * 0.05,
        opacity: isFocused ? 0 : 100,
      }}
    >
      <Tab
        tabColor={props.tabColor}
        style={{ ...styles.tabLeft }}
        icon={"ios-calculator"}
        onPressHandler={props.scrollToStart}
      />
      <Tab
        tabColor={props.tabColor}
        style={{ ...styles.tabRight, backgroundColor: "blue" }}
        icon={"ios-fitness"}
        onPressHandler={props.scrollToEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    bottom: -10,
    position: "absolute",
  },
  tabLeft: {
    flex: 1,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    elevation: 3,
  },
  tabRight: {
    flex: 1,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    elevation: 3,
  },
});

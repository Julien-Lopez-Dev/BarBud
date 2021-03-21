import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import WeightScreen from "./src/screens/WeightScreen";
import TestScreen from "./src/screens/TestScreen";

export default MainScreen = () => {
  const [focused, setFocused] = useState(false);

  const { width } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <WeightScreen
        {...{ focused, setFocused }}
        style={{
          flex: 1,
          width,
          backgroundColor: "#2d373b",
        }}
      />
      {/* <TestScreen /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

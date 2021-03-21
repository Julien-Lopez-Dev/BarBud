import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import ListItem from "./ListItem";

export default PercentList = (props) => {
  const { weight, listActive, width, height, multiplier } = props;

  return (
    <View style={{ height: listActive ? height / 1.9 : 0, width }}>
      <ScrollView
        style={{
          width,
        }}
      >
        <ListItem
          percentage={"97.5%"}
          {...{ weight, multiplier, listActive }}
        />
        <ListItem percentage={"95%"} {...{ weight, multiplier, listActive }} />
        <ListItem
          percentage={"92.5%"}
          {...{ weight, multiplier, listActive }}
        />
        <ListItem percentage={"90%"} {...{ weight, multiplier, listActive }} />
        <ListItem
          percentage={"87.5%"}
          {...{ weight, multiplier, listActive }}
        />
        <ListItem percentage={"85%"} {...{ weight, multiplier, listActive }} />
        <ListItem
          percentage={"82.5%"}
          {...{ weight, multiplier, listActive }}
        />
        <ListItem percentage={"80%"} {...{ weight, multiplier, listActive }} />
        <ListItem
          percentage={"77.5%"}
          {...{ weight, multiplier, listActive }}
        />
        <ListItem percentage={"75%"} {...{ weight, multiplier, listActive }} />
        <ListItem
          percentage={"72.5%"}
          {...{ weight, multiplier, listActive }}
        />
        <ListItem percentage={"70%"} {...{ weight, multiplier, listActive }} />
        <ListItem
          percentage={"67.5%"}
          {...{ weight, multiplier, listActive }}
        />
        <ListItem percentage={"65%"} {...{ weight, multiplier, listActive }} />
        <ListItem
          percentage={"62.5%"}
          {...{ weight, multiplier, listActive }}
        />
        <ListItem percentage={"60%"} {...{ weight, multiplier, listActive }} />
      </ScrollView>
    </View>
  );
};

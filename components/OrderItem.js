import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Block, TextView, Button, Input } from "../components";
import { Colors } from "../components/color";
const GoalItem = (props) => {
  return (
    <Block style={{ paddingHorizontal: 5 }}>
      <Block
        borderRadius={20}
        style={{ padding: 20, backgroundColor: "white" }}
        direction="row"
        justifyContent="space-between"
      >
        <Block direction="row">
          <Image
            style={{ width: 20, height: 20, tintColor: Colors.base_dark }}
            source={require("../assets/time.png")}
          ></Image>
          <Block style={{ marginLeft: 10 }} centered>
            <TextView h6 color={Colors.base_extra_dark}>
              {props.title}
            </TextView>
          </Block>
        </Block>
        <Button onPress={() => props.onDelete(props.id)}>
          <Image
            style={{ width: 20, height: 20, tintColor: Colors.base_dark }}
            source={require("../assets/close.png")}
          ></Image>
        </Button>
      </Block>
    </Block>
    /* <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => props.onDelete(props.id)}
    >
      <View style={styles.goalContainer}>
        <Text color={"purple"}>{props.title}</Text>
      </View>
    </TouchableOpacity> */
  );
};
const styles = StyleSheet.create({
  goalContainer: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "purple",
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
  },
});
export default GoalItem;

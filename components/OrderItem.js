import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { Block, TextView, Button, Input } from "../components";
import { Colors } from "../components/color";
const GoalItem = (props) => {
  const [isAddMode, AddMode] = useState(false);
  return (
    <Block style={{ paddingHorizontal: 5 }}>
      <Block
        borderRadius={20}
        style={{ padding: 20, backgroundColor: "white" }}
        justifyContent="space-between"
      >
        <Block style={{ backgroundColor: "gray" }} direction="row">
          <Block style={{ flex: 1 }}>
            <Image
              style={{
                width: 70,
                height: 70,
                tintColor: Colors.base_dark,
                alignSelf: "flex-start",
                zIndex: 20,
              }}
              source={require("../assets/big_truck.jpg")}
            />
          </Block>
          <Block
            style={{
              backgroundColor: "tomato",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            justifyContent="space-between"
            direction="column"
            centered
          >
            <TextView h6 color={Colors.base_extra_dark}>
              {props.title}
            </TextView>
            <TextView h6 color={Colors.base_extra_dark}>
              Pedido nº 21616161
            </TextView>
            <TextView h6 color={Colors.base_extra_dark}>
              Status Finalizado
            </TextView>
          </Block>
          <Block
            style={{
              marginBottom: 0,
              marginRight: 0,
              backgroundColor: "black",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              zIndex: 20,
            }}
          >
            <Button
              style={{
                backgroundColor: "purple",
                zIndex: 20,
              }}
              onPress={() => AddMode(true)}
            >
              <Image
                style={{
                  width: 20,
                  height: 20,

                  tintColor: Colors.base_dark,
                  alignSelf: "flex-end",
                }}
                source={require("../assets/more.png")}
              />
            </Button>
          </Block>
        </Block>
        {isAddMode && (
          <Block direction="column">
            <Text>Exxxxxxxxxxxxxxpandiu!!</Text>
            <Button onPress={() => AddMode(false)}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  tintColor: Colors.base_dark,
                  alignSelf: "flex-end",
                }}
                source={require("../assets/close.png")}
              ></Image>
            </Button>
          </Block>
        )}
      </Block>
    </Block>
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

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
    <Block style={{ paddingHorizontal: 1 }}>
      <Block
        borderRadius={10}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 20,
          backgroundColor: "white",
        }}
        justifyContent="space-between"
      >
        <Block style={{ backgroundColor: "transparent" }} direction="row">
          <Block style={{ flex: 1 }}>
            <Image
              style={{
                width: 100,
                height: 90,
              }}
              resizeMode="cover"
              source={require("../assets/big_truck.jpg")}
            />
          </Block>
          <Block
            style={{
              backgroundColor: "white",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
            justifyContent="space-between"
            direction="column"
            centered
          >
            <TextView style={{ fontSize: 16 }} color={Colors.black}>
              {props.title}
            </TextView>
            <TextView style={{ fontSize: 16 }} color={Colors.base_regular}>
              Pedido nº {props.order}
            </TextView>
            <TextView style={{ fontSize: 14 }} color={Colors.black}>
              Status: {props.status}
            </TextView>
          </Block>
          <Block
            style={{
              marginBottom: 0,
              marginRight: 0,
              backgroundColor: "transparent",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              zIndex: 20,
            }}
          >
            <Button
              style={{
                zIndex: 20,
              }}
              onPress={() => AddMode(true)}
            >
              <Image
                style={{
                  width: 20,
                  height: 20,

                  tintColor: Colors.black,
                  alignSelf: "flex-end",
                }}
                source={require("../assets/more.png")}
              />
            </Button>
          </Block>
        </Block>
        {isAddMode && (
          <Block direction="column">
            <TextView
              style={{ fontSize: 16, paddingVertical: 10 }}
              color={Colors.base_regular}
            >
              Emitir Nota Fiscal {"\n"}Realizar Tour Virtual {"\n"}Algum
              problema? Acesse nosso Chat!
            </TextView>
            <Button onPress={() => AddMode(false)}>
              <Image
                style={{
                  width: 12,
                  height: 12,
                  marginRight: 5,
                  tintColor: Colors.black,
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

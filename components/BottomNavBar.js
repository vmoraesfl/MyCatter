import React from "react";
import { Image, Component } from "react-native";
import { Block, TextView, Button } from "../components";
import { useNavigation } from "@react-navigation/native";

export default function BottomNavBar({ name }) {
  const navigation = useNavigation();
  const styleComponentEmployee = [
    { alignSelf: "center" },
    { marginTop: -12 },
    { width: 38 },
    { height: 38 },
    { resizeMode: "contain" },
    (name === "Employee" && { tintColor: "#5a33e8" }) || { tintColor: "gray" },
  ];
  const styleComponentEmployeeText = [
    (name === "Employee" && { color: "#5a33e8" }) || { color: "gray" },
  ];

  const styleComponentOrders = [
    { alignSelf: "center" },
    { marginTop: -4 },
    { width: 25 },
    { height: 25 },
    { resizeMode: "contain" },
    (name === "Orders" && { tintColor: "#5a33e8" }) || { tintColor: "gray" },
  ];

  const styleComponentOrdersText = [
    { marginTop: 6 },
    (name === "Orders" && { color: "#5a33e8" }) || { color: "gray" },
  ];

  return (
    <Block style={{ flex: 0.068, marginTop: 20 }}>
      <Block justifyContent="space-between" direction="row">
        <Block paddingHorizontal={40}>
          <Button onPress={() => navigation.navigate("Employee")}>
            <Image
              style={styleComponentEmployee}
              source={require("../assets/images/group.png")}
            ></Image>
            <TextView style={styleComponentEmployeeText} size={11}>
              Entregadores
            </TextView>
          </Button>
        </Block>

        <Block paddingHorizontal={50}>
          <Button onPress={() => navigation.navigate("Orders")}>
            <Image
              style={styleComponentOrders}
              source={require("../assets/images/order.png")}
            ></Image>
            <TextView style={styleComponentOrdersText} size={12}>
              Pedidos
            </TextView>
          </Button>
        </Block>
      </Block>
    </Block>
  );
}

import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { Block, TextView, Button, Input } from "../components";
import { Colors } from "../components/color";
import BottomNavBar from "../components/BottomNavBar";

import GoalItem from "../components/OrderItem";
import GoalInput from "../components/OrderInput";

import * as firebase from "firebase";

export default function HomeScreen({ navigation }) {
  const [isAddMode, AddMode] = useState(false);

  function addGoalHandler(newOrder) {}

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextView
        style={{ marginLeft: 20, alignSelf: "flex-start" }}
        h5
        color="#000"
      >
        Lista de Produtos
      </TextView>
      <Button style={styles.chat} onPress={() => navigation.navigate("Chat")}>
        <Block>
          <Block direction="row">
            <Image
              style={{
                width: 250,
                height: 100,
                resizeMode: "contain",
                tintColor: "#fff",
                paddingHorizontal: 20,
                marginLeft: -40,
                marginTop: 2,
              }}
              source={require("../assets/chatbox-outline.png")}
            ></Image>
            <TextView
              style={{ marginLeft: 20, alignSelf: "flex-start" }}
              h5
              color="#fff"
            >
              Chat
            </TextView>
          </Block>
        </Block>
      </Button>
      <Button style={styles.chat} onPress={() => navigation.navigate("Orders")}>
        <Block>
          <Block direction="row">
            <Image
              style={{
                width: 30,
                height: 30,
                resizeMode: "contain",
                tintColor: "#fff",
                paddingHorizontal: 20,
                marginLeft: -40,
                marginTop: 2,
              }}
              source={require("../assets/order.png")}
            ></Image>
            <TextView
              style={{ marginLeft: 20, alignSelf: "center" }}
              h5
              color="#fff"
            >
              Orders
            </TextView>
          </Block>
        </Block>
      </Button>
      <Button
        shadow
        onPress={() => {
          navigation.navigate("Login");
          firebase.auth().signOut();
        }}
        style={styles.logout}
      >
        <Block>
          <Block direction="row">
            <Image
              style={{
                width: 18,
                height: 18,
                resizeMode: "contain",
                alignSelf: "center",
                tintColor: "#291b5c",
                marginLeft: -5,
                marginTop: 1,
                paddingHorizontal: 10,
              }}
              source={require("../assets/logout.png")}
            ></Image>
            <TextView
              h5
              style={{ marginLeft: 5, alignSelf: "center" }}
              color="#291b5c"
            >
              Sair
            </TextView>
          </Block>
        </Block>
      </Button>
      <Block shadow>
        <Button style={styles.addEmployee} onPress={() => {}}>
          <Block direction="row" centered style={{ padding: 5 }}>
            <TextView
              style={{ marginLeft: 5, alignSelf: "center" }}
              h5
              bold
              color="#fff"
            >
              Adicionar Pedido
            </TextView>
          </Block>
        </Button>
      </Block>
      <BottomNavBar name="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  logout: {
    alignSelf: "center",
    padding: 18,
    paddingHorizontal: 30,
    borderRadius: 25,
    backgroundColor: "white",
  },
  chat: {
    padding: 15,
    borderRadius: 25,
    backgroundColor: Colors.base_regular,
    paddingHorizontal: 60,
    shadowColor: "gray",
    shadowOpacity: 1,
  },
  addEmployee: {
    marginTop: 40,
    padding: 15,
    borderRadius: 25,
    backgroundColor: "#5a33e8",
  },
});

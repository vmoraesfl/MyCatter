import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { Block, TextView, Button, Input } from "../components";
import { Colors } from "../components/color";

import * as firebase from "firebase";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Lista de Pedidos</Text>
      <Button style={styles.chat} onPress={() => navigation.navigate("Chat")}>
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
              source={require("../assets/chatbox-outline.png")}
            ></Image>
            <TextView
              style={{ marginLeft: 20, alignSelf: "center" }}
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
});

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

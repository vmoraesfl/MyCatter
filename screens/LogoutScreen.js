import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { Block, TextView, Button, Input } from "../components";
import { Colors } from "../components/color";

import * as firebase from "firebase";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextView style={{ marginLeft: 20, alignSelf: "center" }} h5 color="#000">
        Deseja Encerrar sua Sessão?
      </TextView>
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
            <TextView
              h5
              style={{ marginLeft: 5, alignSelf: "center" }}
              color="#291b5c"
            >
              Sim
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
});

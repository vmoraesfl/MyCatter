import * as React from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import { Block, TextView, Button, Input } from "../components";
import { Colors } from "../components/color";

import * as firebase from "firebase";

export default function LogoutScreen({ navigation }) {
  function createTwoButtonAlert() {
    Alert.alert(
      "Deseja se deslogar?",
      "",

      [
        {
          text: "Não",
          onPress: () => {
            navigation.navigate("Orders");
          },
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            firebase.auth().signOut();
            navigation.navigate("Login");
          },
        },
      ],
      { cancelable: false }
    );
  }

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      // Prevent default behavior
      e.preventDefault();

      createTwoButtonAlert();
      // Do something manually
      // ...
    });

    return unsubscribe;
  }, [navigation]);

  return <View>{createTwoButtonAlert()}</View>;
}

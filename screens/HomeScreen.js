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

  return (
    <Block style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>HOME</Text>
    </Block>
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

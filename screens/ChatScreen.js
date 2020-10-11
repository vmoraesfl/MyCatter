import React, { Component } from "react";
import * as firebase from "firebase";

import {
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  Text,
} from "react-native";

import { GiftedChat } from "react-native-gifted-chat";
import Fire from "../Fire";

export default class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("name"),
  });

  state = {
    email: "",
    displayName: "",
    message: [],
  };

  get user() {
    let name = this.state.displayName;
    return {
      _id: Fire.uid,
      name: name,
    };
  }

  componentDidMount() {
    Fire.get((message) =>
      this.setState((previous) => ({
        messages: GiftedChat.append(previous.messages, message),
      }))
    );

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
      } else {
        firebase.auth().signInAnonymously();
      }
    });
  }

  componentWillUnmount() {
    Fire.off();
  }

  render() {
    // console.log("rendered");

    const chat = (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.send}
        user={this.user}
      />
    );

    if (Platform.OS === "android") {
      return (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
          keyboardVerticalOffset={30}
        >
          <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>
        </KeyboardAvoidingView>
      );
    }

    return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>;
  }
}

const styles = StyleSheet.create({
  box: { flex: 1, backgroundColor: "blue" },
});

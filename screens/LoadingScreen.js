import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";
import * as firebase from "firebase";

export default class LoadingScreen extends React.Component {
  state = {
    isLoaded: false,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        //console.log("user é definido assim:", user);
        this.props.navigation.navigate(
          !user || user.isAnonymous ? "Login" : "Home"
        );
      }, 1200);
    });
  }

  render() {
    return (
      <AnimatedSplash
        translucent={true}
        logoImage={require("../assets/loading_mycat.jpg")}
        isLoaded={false}
        backgroundColor={"white"}
        logoHeight={300}
        logoWidht={300}
      ></AnimatedSplash>
    );
  }
}

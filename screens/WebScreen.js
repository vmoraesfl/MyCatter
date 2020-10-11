import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default class WebScreen extends Component {
  render() {
    return <WebView source={{ uri: "https://www.sotreq.com.br/" }} />;
  }
}

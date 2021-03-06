import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  Alert,
} from "react-native";

import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Block, TextView, Button, Input } from "../components";
import * as firebase from "firebase";

export default class LogingScreen extends React.Component {
  state = {
    email: "",
    password: "",
    errorMessage: null,
  };

  componentDidMount() {
    console.log(firebase.auth().currentUser);
    firebase.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        //console.log("user é definido assim:", user);
        this.props.navigation.navigate(
          !user || user.isAnonymous ? "Login" : "TabNav"
        );
      }, 1200);
    });
  }

  handleLoginOwner = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  createTwoButtonAlert = () =>
    Alert.alert(
      "Recuperação de Senha",
      "Um link foi enviado para o seu email",
      [{ text: "OK", onPress: () => {} }],
      { cancelable: true }
    );

  render() {
    return (
      <ScrollView backgroundColor={"#e6d4ff"} style={{ flex: 1 }}>
        <SafeAreaView>
          <Block>
            <Block
              style={{
                width: 820,
                height: 800,
                borderRadius: 800 / 2,
                backgroundColor: "#f1e8ff",
                position: "absolute",
                left: -290,
                top: -290,
              }}
            ></Block>

            <Block
              style={{
                marginTop: -20,
                alignSelf: "center",
                borderRadius: 80,
                width: 300,
                height: 300,
                backgroundColor: "#f1e8ff",
              }}
            >
              <Image
                style={{
                  flex: 1,
                  width: 300,
                  resizeMode: "contain",
                }}
                source={require("../assets/logo_mycat.png")}
              ></Image>
            </Block>

            <Block>
              <Block style={{ marginTop: -50 }}>
                <Block
                  borderWidth={13}
                  borderColor="#fff"
                  color="#fff"
                  borderRadius={10}
                  style={{ marginTop: 10, marginLeft: 20, marginRight: 20 }}
                >
                  <TextInput
                    style={{ fontSize: 18 }}
                    placeholder="Digite o seu endereço de email"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </Block>
              </Block>

              <Block style={{ marginTop: 10 }}>
                <Block
                  borderWidth={13}
                  borderColor="#fbf7ff"
                  color="#fbf7ff"
                  borderRadius={10}
                  style={{ marginTop: 10, marginLeft: 20, marginRight: 20 }}
                >
                  <TextInput
                    style={{ fontSize: 18 }}
                    placeholder="Digite a sua senha"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                  />
                </Block>
                <TextView color="#E9446A" center style={{ marginTop: 10 }}>
                  {this.state.errorMessage && (
                    <Text>E-mail ou senha inválidos!</Text>
                  )}
                </TextView>
              </Block>

              <Block direction="row" style={{ marginTop: 0 }}>
                <Button style={{ flex: 1 }} onPress={this.handleLoginOwner}>
                  <Block
                    color="#fbc210"
                    borderRadius={20}
                    padding={15}
                    style={{ marginTop: 10, marginLeft: 20, marginRight: 20 }}
                    shadow
                  >
                    <Block direction="row" paddingHorizontal={15} centered>
                      <TextView
                        size={20}
                        styleComponent={{
                          fontWeight: "10",
                          alignSelf: "center",
                        }}
                        color="black"
                        bold
                      >
                        Login
                      </TextView>
                    </Block>
                  </Block>
                </Button>
              </Block>

              <Block
                direction="row"
                justifyContent="center"
                style={{ marginTop: 30 }}
              >
                <TextView size={16}>Não possui uma conta? </TextView>
                <Button
                  onPress={() => this.props.navigation.navigate("Register")}
                >
                  <TextView size={16} style color="#fbc210" bold>
                    Sign Up
                  </TextView>
                </Button>
              </Block>
              <Block
                direction="row"
                justifyContent="center"
                style={{ marginTop: 5 }}
              >
                <Button onPress={() => this.createTwoButtonAlert()}>
                  <TextView size={16} color="#fbc210" bold>
                    Esqueceu a senha?
                  </TextView>
                </Button>
              </Block>

              <Block
                style={{
                  marginTop: 10,
                  alignSelf: "center",
                  alignItems: "center",
                  borderRadius: 1,
                  width: 300,
                  height: 150,
                  backgroundColor: "transparent",
                }}
              >
                <Image
                  style={{
                    flex: 1,
                    width: 150,
                    resizeMode: "contain",
                  }}
                  source={require("../assets/parceria.png")}
                ></Image>
              </Block>
            </Block>
          </Block>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../components/color";
import { Block, TextView, Button, Input } from "../components";
import * as firebase from "firebase";

export default class RegisterScreen extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    errorMessage: null,
  };
  handleSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredentials) => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name,
        });
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

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
            <Block padding={30} style={{ marginTop: 70 }}>
              <Button
                style={styles.back}
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <Ionicons
                  name="ios-arrow-round-back"
                  size={40}
                  color="black"
                ></Ionicons>
              </Button>
              <Block>
                <TextView
                  size={30}
                  color="black"
                  style={{ marginTop: 15 }}
                  bold
                >
                  Registre-se
                </TextView>
              </Block>
              <Block>
                <Block style={{ marginTop: 20 }}>
                  <TextView
                    size={16}
                    style={{ fontWeight: "600" }}
                    color="gray"
                  >
                    Nome Completo
                  </TextView>
                  <Block
                    borderWidth={13}
                    borderColor="#fff"
                    color="#fff"
                    borderRadius={10}
                    style={{ marginTop: 10, marginLeft: -2 }}
                  >
                    <TextInput
                      style={{ fontSize: 18 }}
                      placeholder="João da Silva"
                      onChangeText={(name) => this.setState({ name })}
                      value={this.state.name}
                    />
                  </Block>
                </Block>

                <Block style={{ marginTop: 20 }}>
                  <TextView
                    size={16}
                    style={{ fontWeight: "600" }}
                    color="gray"
                  >
                    Endereço de Email
                  </TextView>
                  <Block
                    borderWidth={13}
                    borderColor="#fff"
                    color="#fff"
                    borderRadius={10}
                    style={{ marginTop: 10, marginLeft: -2 }}
                  >
                    <TextInput
                      style={{ fontSize: 18 }}
                      placeholder="exemplo@provedor.com"
                      onChangeText={(email) => this.setState({ email })}
                      value={this.state.email}
                    />
                  </Block>
                </Block>
                <Block style={{ marginTop: 20 }}>
                  <TextView
                    size={16}
                    style={{ fontWeight: "600" }}
                    color="gray"
                  >
                    Senha
                  </TextView>

                  <Block
                    borderWidth={13}
                    borderColor="#fbf7ff"
                    color="#fbf7ff"
                    borderRadius={10}
                    style={{ marginTop: 10, marginLeft: -2 }}
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
                      <Text>{this.state.errorMessage}</Text>
                    )}
                  </TextView>
                </Block>

                <Block style={{ marginTop: 0, alignSelf: "center" }}>
                  <Button onPress={this.handleSignup}>
                    <Block
                      color="#fbc210"
                      borderRadius={20}
                      padding={15}
                      style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
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
                          Sign Up
                        </TextView>
                      </Block>
                    </Block>
                  </Button>
                </Block>
                <Block
                  direction="row"
                  justifyContent="center"
                  style={{ marginTop: 40 }}
                >
                  <TextView size={16}>Já possui uma conta? </TextView>
                  <Button
                    onPress={() => this.props.navigation.navigate("Login")}
                  >
                    <TextView size={16} color="#fbc210" bold>
                      Log in
                    </TextView>
                  </Button>
                </Block>
              </Block>
            </Block>
          </Block>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    marginTop: -50,
    marginLeft: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fbc210",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

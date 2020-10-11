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
import { Block, TextView, Button, Input } from "../components";
import * as firebase from "firebase";

const userData = () => firebase.auth().currentUser;

export default class Profile extends Component {
  /* static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("name"),
  }); */

  state = {
    email: "",
    displayName: "",
    message: [],
  };

  /*  get user() {
    let name = this.state.displayName;
    return {
      _id: Fire.uid,
      name: name,
    };
  } */

  render() {
    const { displayName, email, phoneNumber } = userData();
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
            <Block padding={30} style={{ marginTop: 50 }}>
              <Block>
                <TextView h1 color="black">
                  Seu Cadastro
                </TextView>
              </Block>
              <Block>
                <Block style={{ marginTop: 50 }}>
                  <TextView
                    size={20}
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
                      style={{ fontSize: 20 }}
                      placeholder=""
                      value={displayName}
                    />
                  </Block>
                </Block>

                <Block style={{ marginTop: 20 }}>
                  <TextView
                    size={20}
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
                      style={{ fontSize: 20 }}
                      placeholder=""
                      value={email}
                    />
                  </Block>
                </Block>
                <Block style={{ marginTop: 20 }}>
                  <TextView
                    size={20}
                    style={{ fontWeight: "600" }}
                    color="gray"
                  >
                    Número de Telefone
                  </TextView>

                  <Block
                    borderWidth={13}
                    borderColor="#fbf7ff"
                    color="#fbf7ff"
                    borderRadius={10}
                    style={{ marginTop: 10, marginLeft: -2 }}
                  >
                    <TextInput
                      style={{ fontSize: 20 }}
                      placeholder=""
                      autoCapitalize="none"
                      value={"+55 21 99999-8888"}
                    />
                  </Block>
                </Block>
                <Block style={{ marginTop: 20 }}>
                  <TextView
                    size={20}
                    style={{ fontWeight: "600" }}
                    color="gray"
                  >
                    CPF
                  </TextView>

                  <Block
                    borderWidth={13}
                    borderColor="#fbf7ff"
                    color="#fbf7ff"
                    borderRadius={10}
                    style={{ marginTop: 10, marginLeft: -2 }}
                  >
                    <TextInput
                      style={{ fontSize: 20 }}
                      placeholder=""
                      autoCapitalize="none"
                      value={"CPF: 650.533.440-86"}
                    />
                  </Block>
                </Block>
                <Block style={{ marginTop: 20 }}>
                  <TextView
                    size={20}
                    style={{ fontWeight: "600" }}
                    color="gray"
                  >
                    CNPJ
                  </TextView>

                  <Block
                    borderWidth={13}
                    borderColor="#fbf7ff"
                    color="#fbf7ff"
                    borderRadius={10}
                    style={{ marginTop: 10, marginLeft: -2 }}
                  >
                    <TextInput
                      style={{ fontSize: 20 }}
                      placeholder=""
                      autoCapitalize="none"
                      value={"92.110.118/0001-90"}
                    />
                  </Block>
                </Block>
                <Block style={{ marginTop: 20 }}>
                  <TextView
                    size={20}
                    style={{ fontWeight: "600" }}
                    color="gray"
                  >
                    Inscrição Estadual
                  </TextView>

                  <Block
                    borderWidth={13}
                    borderColor="#fbf7ff"
                    color="#fbf7ff"
                    borderRadius={10}
                    style={{ marginTop: 10, marginLeft: -2 }}
                  >
                    <TextInput
                      style={{ fontSize: 20 }}
                      placeholder=""
                      autoCapitalize="none"
                      value={"004/0836100"}
                    />
                  </Block>
                </Block>
                <Block style={{ marginTop: 20 }}>
                  <TextView
                    size={20}
                    style={{ fontWeight: "600" }}
                    color="gray"
                  >
                    Endereço Residencial
                  </TextView>

                  <Block
                    borderWidth={13}
                    borderColor="#fbf7ff"
                    color="#fbf7ff"
                    borderRadius={10}
                    style={{ marginTop: 10, marginLeft: -2 }}
                  >
                    <TextInput
                      style={{ fontSize: 20 }}
                      placeholder=""
                      autoCapitalize="none"
                      value={
                        "Praça General Tibúrcio, 80, Praia Vermelha, Rio de Janeiro - RJ"
                      }
                    />
                  </Block>
                </Block>

                <Block style={{ marginTop: 10, alignSelf: "center" }}>
                  <Button onPress={this.handleSignup}>
                    <Block
                      color="#fbc210"
                      borderRadius={20}
                      padding={15}
                      shadow
                    >
                      <Block
                        style={{ width: 200 }}
                        direction="row"
                        paddingHorizontal={50}
                        middle
                        centered
                      >
                        <TextView
                          size={25}
                          style={{ fontWeight: "500" }}
                          color="black"
                          bold
                        >
                          Enter
                        </TextView>
                      </Block>
                    </Block>
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
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  name: {
    fontSize: 26,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 38,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 20,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 30,
    textAlign: "center",
  },
});

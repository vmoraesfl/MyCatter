// Analisando os comentários de técnicos de tecnologia da Sotreq,
// nosso grupo chegou à conclusão de que seria interessante usar
// dados fornecidos pela Sales Force / SAP, que porventura estariam
// descentralizados nessas plataformas, para fazer uma análise,
// filtragem e tratamento de dados, a fim de que seja possível
// produzir um JSON com os dados a serem utilizados.Nesse
// arquivo, utilizaremos na linha 27 um possível produto
// de diversos requests à infraestrutura de dados da empresa

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

const fakeUserData = {
  CPF: "650.533.440-86",
  phone: "+55 21 99999-8888",
  CNPJ: "92.110.118/0001-90",
  stateRegistration: "004/0836100",
  address: "Praça General Tibúrcio, 80, Praia Vermelha, Rio de Janeiro - RJ",
};

export default class Profile extends Component {
  state = {
    email: "",
    displayName: "",
    message: [],
  };

  render() {
    const { displayName, email, phoneNumber } = userData();
    const { CPF, CNPJ, phone, stateRegistration, address } = fakeUserData;
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
            <Block padding={30} style={{ marginTop: 30 }}>
              <Block>
                <TextView
                  size={30}
                  color="black"
                  style={{ marginTop: 15 }}
                  bold
                >
                  Seu Cadastro
                </TextView>
              </Block>
              <Block>
                <Block style={{ marginTop: 20 }}>
                  <TextView
                    size={18}
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
                      placeholder=""
                      value={displayName}
                    />
                  </Block>
                </Block>

                <Block style={{ marginTop: 20 }}>
                  <TextView
                    size={18}
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
                      placeholder=""
                      value={email}
                    />
                  </Block>
                </Block>
                <Block style={{ marginTop: 20 }}>
                  <TextView
                    size={18}
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
                      style={{ fontSize: 18 }}
                      placeholder=""
                      autoCapitalize="none"
                      value={phone}
                    />
                  </Block>
                </Block>
                <Block style={{ marginTop: 20 }}>
                  <TextView
                    size={18}
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
                      style={{ fontSize: 18 }}
                      placeholder=""
                      autoCapitalize="none"
                      value={CPF}
                    />
                  </Block>
                </Block>
                <Block style={{ marginTop: 20 }}>
                  <TextView
                    size={18}
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
                      style={{ fontSize: 18 }}
                      placeholder=""
                      autoCapitalize="none"
                      value={CNPJ}
                    />
                  </Block>
                </Block>
                <Block style={{ marginTop: 20 }}>
                  <TextView
                    size={18}
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
                      style={{ fontSize: 18 }}
                      placeholder=""
                      autoCapitalize="none"
                      value={stateRegistration}
                    />
                  </Block>
                </Block>
                <Block style={{ marginTop: 20 }}>
                  <TextView
                    size={18}
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
                      style={{ fontSize: 18 }}
                      placeholder=""
                      autoCapitalize="none"
                      value={address}
                    />
                  </Block>
                </Block>

                <Block style={{ marginTop: 10, alignSelf: "center" }}>
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

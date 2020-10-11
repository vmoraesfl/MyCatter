import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import { Block, TextView, Button, Input } from "../components";
import { ScrollView } from "react-native-gesture-handler";
import BottomNavBar from "../components/BottomNavBar";
import * as firebase from "firebase";
import { Colors } from "../components/color";

import GoalItem from "../components/OrderItem";
import GoalInput from "../components/OrderInput";

const randomStep = () => Math.floor(Math.random() * 3);
const randomLat = () => (Math.random() * 28.48 - 33.75).toFixed(3) * 1;
const randomLong = () => (Math.random() * 39 - 74).toFixed(3) * 1;

export default class EmployeeScreen extends React.Component {
  state = {
    ordersList: [
      {
        id: "51",
        pedido: "123456",
        value: "Caminhão de Mineração",
        status: "Aprovado",
        step: randomStep(),
        image: "big_truck",
        coordinates: {
          latitude: randomLat(),
          longitude: randomLong(),
        },
      },
      {
        id: "88",
        pedido: "123456",
        value: "Mini Escavadeira",
        status: "Aprovado",
        step: randomStep(),
        image: "mini_escavadeira",
        coordinates: {
          latitude: randomLat(),
          longitude: randomLong(),
        },
      },
      {
        id: "99",
        pedido: "123456",
        value: "Carregadeira Pequena",
        status: "Entregue",
        step: 3,
        image: "carregadeira",
        coordinates: {
          latitude: randomLat(),
          longitude: randomLong(),
        },
      },
    ],
    isAddMode: false,
  };

  detailsHandler(goalId) {
    this.setState({
      ordersList: this.state.ordersList.filter((goal) => goal.id !== goalId),
    });
  }

  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <Block style={{ flex: 1 }}>
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
              <Block padding={25} style={{ marginTop: 20 }}>
                <Block direction="row" justifyContent="flex-start">
                  <TextView
                    size={30}
                    color="black"
                    style={{ marginTop: 15 }}
                    bold
                  >
                    Meus Pedidos
                  </TextView>
                </Block>
                <Block justifyContent="flex-start">
                  <Block shadow style={styles.container}>
                    <View>
                      <FlatList
                        data={this.state.ordersList}
                        renderItem={(itemData) => (
                          <Block style={{ marginTop: 10 }}>
                            <GoalItem
                              id={itemData.item.id}
                              onExpand={(id) => this.detailsHandler(id)}
                              title={itemData.item.value}
                              status={itemData.item.status}
                              order={itemData.item.pedido}
                              step={itemData.item.step}
                              image={itemData.item.image}
                              coordinates={itemData.item.coordinates}
                            />
                          </Block>
                        )}
                      />
                    </View>
                  </Block>
                </Block>
              </Block>
            </Block>
          </SafeAreaView>
        </ScrollView>
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignSelf: "center",
    height: 700,
    width: "100%",
    borderRadius: 5,
    backgroundColor: "transparent",
    paddingVertical: 10,
  },
  containerText: {
    marginLeft: 5,
    marginTop: 5,
  },
  addEmployee: {
    marginTop: 40,
    padding: 15,
    borderRadius: 25,
    backgroundColor: "#fff",
  },
});

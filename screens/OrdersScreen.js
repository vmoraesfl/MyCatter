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

export default class EmployeeScreen extends React.Component {
  state = {
    ordersList: [
      { id: "51", value: "Cliente: Ana Delfina" },
      { id: "88", value: "Cliente: Pedro Paulo" },
    ],
    isAddMode: false,
  };

  createTwoButtonAlert = () =>
    Alert.alert(
      "Ordem de Entrega criado!\n Pedido nº #10231",
      "O código do pedido foi enviado para o cliente por SMS",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );

  addGoalHandler(newOrder) {
    //console.log("new order é:", newOrder);
    this.setState({
      ordersList: [
        ...this.state.ordersList,
        { id: Math.random().toString(), value: newOrder },
      ],
    });
    console.log(this.state.ordersList);

    this.setState({ isAddMode: false });

    setTimeout(() => {
      //console.log("user é definido assim:", user);
      this.createTwoButtonAlert();
    }, 1000);
  }

  removeGoalHandler(goalId) {
    console.log("goalId:", goalId);
    this.setState({
      ordersList: this.state.ordersList.filter((goal) => goal.id !== goalId),
    });
    console.log("nova lista:", this.state.ordersList);
  }

  cancelHandler() {
    this.setState({ isAddMode: false });
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
              <Block padding={30} style={{ marginTop: 20 }}>
                <Block direction="row" justifyContent="space-between">
                  <TextView
                    h2
                    color="#291b5c"
                    style={{ marginLeft: 15 }}
                    center
                  >
                    Pedidos
                  </TextView>
                </Block>
                <Block style={{ marginTop: 10 }} justifyContent="space-between">
                  <Block shadow style={styles.container}>
                    <View>
                      <GoalInput
                        visible={this.state.isAddMode}
                        onAddGoal={(order) => this.addGoalHandler(order)}
                        onCancel={() => this.setState({ isAddMode: false })}
                      />
                      <FlatList
                        data={this.state.ordersList}
                        renderItem={(itemData) => (
                          <Block style={{ marginTop: 10 }}>
                            <GoalItem
                              id={itemData.item.id}
                              onDelete={(id) => this.removeGoalHandler(id)}
                              title={itemData.item.value}
                            />
                          </Block>
                        )}
                      />
                    </View>
                  </Block>
                </Block>
                <Block shadow>
                  <Button
                    style={styles.addEmployee}
                    onPress={() => this.setState({ isAddMode: true })}
                  >
                    <Block direction="row" centered style={{ padding: 5 }}>
                      <TextView
                        style={{ marginLeft: 5, alignSelf: "center" }}
                        h5
                        bold
                        color="#fff"
                      >
                        Adicionar Pedido
                      </TextView>
                    </Block>
                  </Button>
                </Block>
              </Block>
            </Block>

            <Block
              style={{
                marginTop: -10,
                paddingHorizontal: 30,
                backgroundColor: Colors.base_light,
              }}
            >
              <Block direction="row" justifyContent="space-between">
                <Button
                  style={styles.chat}
                  onPress={() => this.props.navigation.navigate("Chat")}
                >
                  <Block>
                    <Block direction="row">
                      <Image
                        style={{
                          width: 30,
                          height: 30,
                          resizeMode: "contain",
                          tintColor: "#fff",
                          paddingHorizontal: 20,
                          marginLeft: -40,
                          marginTop: 2,
                        }}
                        source={require("../assets/chatbox-outline.png")}
                      ></Image>
                      <TextView
                        style={{ marginLeft: 20, alignSelf: "center" }}
                        h5
                        color="#fff"
                      >
                        Chat
                      </TextView>
                    </Block>
                  </Block>
                </Button>
                <Button shadow onPress={this.signOutUser} style={styles.logout}>
                  <Block>
                    <Block direction="row">
                      <Image
                        style={{
                          width: 18,
                          height: 18,
                          resizeMode: "contain",
                          alignSelf: "center",
                          tintColor: "#291b5c",
                          marginLeft: -5,
                          marginTop: 1,
                          paddingHorizontal: 10,
                        }}
                        source={require("../assets/logout.png")}
                      ></Image>
                      <TextView
                        h5
                        style={{ marginLeft: 5, alignSelf: "center" }}
                        color="#291b5c"
                      >
                        Sair
                      </TextView>
                    </Block>
                  </Block>
                </Button>
              </Block>
            </Block>
          </SafeAreaView>
        </ScrollView>
        <BottomNavBar name="Orders" />
      </Block>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignSelf: "center",
    height: 420,
    width: "100%",
    borderRadius: 25,
    backgroundColor: "#5a33e8",
    paddingVertical: 10,
  },
  containerText: {
    marginLeft: 15,
    marginTop: 5,
  },
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
    backgroundColor: Colors.base_dark,
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

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
              <Block padding={30} style={{ marginTop: 20 }}>
                <Block direction="row" justifyContent="space-between">
                  <TextView h5 color="black" style={{ marginLeft: 5 }} bold>
                    Meus Pedidos
                  </TextView>
                </Block>
                <Block style={{ marginTop: 10 }} justifyContent="space-between">
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
                            />
                          </Block>
                        )}
                      />
                    </View>
                  </Block>
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
    borderRadius: 5,
    backgroundColor: "transparent",
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

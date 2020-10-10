import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";

import HomeScreen from "./screens/HomeScreen";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoadingScreen from "./screens/LoadingScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LogoutScreen from "./screens/LogoutScreen";
import OrdersScreen from "./screens/OrdersScreen";

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBuD004lDVjigZTXeQCReXi5o66C9xH5_Y",
  authDomain: "desafio-sotreq.firebaseapp.com",
  databaseURL: "https://desafio-sotreq.firebaseio.com",
  projectId: "desafio-sotreq",
  storageBucket: "desafio-sotreq.appspot.com",
  messagingSenderId: "330632799451",
  appId: "1:330632799451:web:691f286fdf32d4062618fe",
  measurementId: "G-5DLDMF4DDW",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Chat":
                iconName = "mail";
                break;
              case "Website":
                iconName = "link";
                break;
              case "Profile":
                iconName = "user";
                break;
              case "Sair":
                iconName = "log-out";
                break;
              default:
                iconName = "circle";
                break;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#F8C210",
          inactiveTintColor: "#000",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Website" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Sair" component={LogoutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

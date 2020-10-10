import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoadingScreen from "./screens/LoadingScreen";
import ChatScreen from "./screens/ChatScreen";
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

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "Meus Pedidos",
          }}
        />

        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false, headerTransparent: true }}
        />
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false, headerTransparent: true }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

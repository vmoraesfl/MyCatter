import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import * as firebase from "firebase";

var faker = require('faker/locale/pt_BR')

const userData = () => (
  firebase.auth().currentUser
)

const fakeUser = {
  phone: faker.phone

}

export default class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("name"),
  });


  state = {
    email: "",
    displayName: "",
    message: [],
  };

  get user() {
    let name = this.state.displayName;
    return {
      _id: Fire.uid,
      name: name,
    };
  }

  render() {
    const { displayName, email, phoneNumber} = userData()
    return (
      <View style={styles.container}>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
            <Text style={styles.name}>{displayName}</Text>
            <Text style={styles.info}>{email}</Text>
            <Text style={styles.description}>CPF: 650.533.440-86</Text>
            <Text style={styles.description}>CNPJ: 92.110.118/0001-90</Text>
            <Text style={styles.description}>Inscrição Estadual: 004/0836100</Text>
            <Text style={styles.description}>Telefone: +55 21 99999-8888</Text>
            <Text style={styles.description}>Praça General Tibúrcio, 80, Praia Vermelha, Rio de Janeiro - RJ</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  name:{
    fontSize:26,
    color:"#FFFFFF",
    fontWeight:'700',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:38,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:20,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:30,
    textAlign: 'center'
  },
});


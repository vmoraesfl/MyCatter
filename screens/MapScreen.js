import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import { PermissionsAndroid } from "react-native";

import { Block, TextView, Button, Input } from "../components";
import { Colors } from "../components/color";

import { ScrollView } from "react-native-gesture-handler";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import getDirections from "react-native-google-maps-directions";
import Geocoder from "react-native-geocoding";

import * as firebase from "firebase";

const GOOGLE_MAPS_APIKEY = "AIzaSyAfow7YS_DQ1MIO4KpNuhHYI6pLKvfhy5o";

const { height, width } = Dimensions.get("window");

export default class MapScreen extends React.Component {
  state = {
    email: "",
    displayName: "",
    origin: { latitude: -22.955629, longitude: -43.165957 },
    destination: { latitude: -22.95082, longitude: -43.184718 },
    originText: "",
    destinationText: "",
    driver: { latitude: -22.95382, longitude: -43.174718 },
  };

  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
        return true;
      } else {
        console.log("location permission denied");
        return false;
      }
    } catch (err) {
      console.warn(err);
    }
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let newOrigin = {
          /* latitude: position.coords.latitude,
          longitude: position.coords.longitude, */
          latitude: -22.955629,
          longitude: -43.165957,
        };

        console.log("new origin");
        console.log(newOrigin);

        this.setState({
          origin: newOrigin,
        });
      },
      (err) => {
        console.log("error");
        console.log(err);
      },
      { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 }
    );
  };

  async componentDidMount() {
    let isGranted = await this.requestLocationPermission();

    if (isGranted) {
      this.getLocation();
    }

    this.getLocation();
  }

  handleButton = () => {
    if (this.state.originText != "") {
      Geocoder.init(GOOGLE_MAPS_APIKEY); // use a valid API key

      Geocoder.from(this.state.originText)
        .then((json) => {
          var location = json.results[0].geometry.location;
          console.log(location);
          this.setState({
            origin: { latitude: location.lat, longitude: location.lng },
          });
        })
        .catch((error) => console.warn(error));
    } else {
      alert("Digite a origem ! ");
    }

    if (this.state.destinationText != "") {
      Geocoder.init(GOOGLE_MAPS_APIKEY); // use a valid API key

      Geocoder.from(this.state.destinationText)
        .then((json) => {
          var location = json.results[0].geometry.location;
          console.log(location);
          this.setState({
            destination: { latitude: location.lat, longitude: location.lng },
          });
        })
        .catch((error) => console.warn(error));
    } else {
      alert("Digite o destino ! ");
    }
  };

  handleGetGoogleMapDirections = () => {
    const data = {
      source: this.state.origin,
      destination: this.state.destination,
      params: [
        {
          key: "travelmode",
          value: "driving",
        },
      ],
    };

    getDirections(data);
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
                    style={{ marginLeft: 10 }}
                    center
                  >
                    Pedido #10231
                  </TextView>
                  <Button style={{ alignSelf: "center", marginLeft: 10 }}>
                    <TextView size={16} color={Colors.blue1} center>
                      editar
                    </TextView>
                  </Button>
                </Block>
                <Block shadow padding={12} style={styles.container}>
                  <Block style={{ marginLeft: 10 }}>
                    <Block direction="row" style={{ marginTop: 5 }}>
                      <Image
                        style={{
                          width: 22,
                          height: 22,
                          resizeMode: "contain",
                          tintColor: "#fff",
                          alignSelf: "center",
                        }}
                        source={require("../assets/time.png")}
                      ></Image>
                      <TextView
                        bold
                        shadow
                        size={18}
                        style={{ alignSelf: "center", marginLeft: 10 }}
                        color="#fff"
                      >
                        TT Burguer
                      </TextView>
                    </Block>
                    <Block direction="row" style={{ marginTop: 5 }}>
                      <Image
                        style={{
                          width: 21,
                          height: 21,
                          resizeMode: "contain",
                          tintColor: "#fff",
                          alignSelf: "center",
                        }}
                        source={require("../assets/time.png")}
                      ></Image>
                      <TextView
                        bold
                        shadow
                        size={18}
                        style={{ alignSelf: "center", marginLeft: 10 }}
                        color="#fff"
                      >
                        Instituto Militar de Engenharia
                      </TextView>
                    </Block>

                    <Block direction="row" style={{ marginTop: 5 }}>
                      <Image
                        style={{
                          width: 20,
                          height: 20,
                          resizeMode: "contain",
                          tintColor: "#fff",
                          alignSelf: "center",
                        }}
                        source={require("../assets/time.png")}
                      ></Image>
                      <TextView
                        bold
                        size={18}
                        style={{ alignSelf: "center", marginLeft: 10 }}
                        color="#fff"
                      >
                        Previsão de Chegada às 13:00
                      </TextView>
                    </Block>
                    <Block direction="row" style={{ marginTop: 5 }}>
                      <Image
                        style={{
                          width: 20,
                          height: 20,
                          resizeMode: "contain",
                          tintColor: "#fff",
                          alignSelf: "center",
                        }}
                        source={require("../assets/time.png")}
                      ></Image>
                      <TextView
                        bold
                        size={18}
                        style={{ alignSelf: "center", marginLeft: 10 }}
                        color="#fff"
                      >
                        Entrega sem Contato Físico
                      </TextView>
                    </Block>
                  </Block>
                </Block>
                <Block justifyContent="space-between">
                  <Block shadow style={styles.containerMap}>
                    {/*  <TextView
                      style={styles.containerText}
                      h6
                      padding={12}
                      color="#fff"
                    >
                      Insert Map Here
                    </TextView> */}

                    {/* <MapView
                      style={styles.map}
                      initialRegion={{
                        latitude: -22.955629,
                        longitude: -43.165957,
                        latitudeDelta: 0.0092,
                        longitudeDelta: 0.0042,
                      }}
                    >
                      <MapView.Marker
                        coordinate={{
                          latitude: -22.955629,
                          longitude: -43.165957,
                        }}
                      >
                        <View style={styles.radius}>
                          <View style={styles.markerStart} />
                        </View>
                      </MapView.Marker>
                      <MapView.Marker
                        coordinate={{
                          latitude: -22.95082,
                          longitude: -43.184718,
                        }}
                      >
                        <View style={styles.radius}>
                          <View style={styles.markerEnd} />
                        </View>
                      </MapView.Marker>
                      <MapViewDirections>
                        origin={{ latitude: -22.955629, longitude: -43.165957 }}
                        destination=
                        {{ latitude: -22.95082, longitude: -43.184718 }}
                        apikey={"AIzaSyAfow7YS_DQ1MIO4KpNuhHYI6pLKvfhy5o"}
                      </MapViewDirections>
                    </MapView> */}

                    <MapView
                      ref={(map) => (this.mapView = map)}
                      style={styles.map}
                      region={{
                        latitude:
                          (this.state.origin.latitude +
                            this.state.destination.latitude) /
                          2,
                        longitude:
                          (this.state.origin.longitude +
                            this.state.destination.longitude) /
                          2,
                        latitudeDelta:
                          Math.abs(
                            this.state.origin.latitude -
                              this.state.destination.latitude
                          ) +
                          Math.abs(
                            this.state.origin.latitude -
                              this.state.destination.latitude
                          ) *
                            0.25,
                        longitudeDelta:
                          Math.abs(
                            this.state.origin.longitude -
                              this.state.destination.longitude
                          ) +
                          Math.abs(
                            this.state.origin.longitude -
                              this.state.destination.longitude
                          ) *
                            0.25,
                      }}
                      loadingEnabled={true}
                      toolbarEnabled={true}
                      zoomControlEnabled={true}
                    >
                      <MapView.Marker coordinate={this.state.destination}>
                        <View style={styles.radius}>
                          <View style={styles.markerEnd} />
                        </View>
                      </MapView.Marker>

                      <MapView.Marker coordinate={this.state.origin}>
                        <View style={styles.radius}>
                          <View style={styles.markerStart} />
                        </View>
                      </MapView.Marker>

                      <MapView.Marker
                        coordinate={this.state.driver}
                        image={require("../assets/time.png")}
                      />

                      <MapViewDirections
                        origin={this.state.origin}
                        destination={this.state.destination}
                        apikey={GOOGLE_MAPS_APIKEY}
                      />
                    </MapView>
                  </Block>
                </Block>
              </Block>
            </Block>
          </SafeAreaView>
        </ScrollView>
        <Block
          style={{
            flex: 0.15,
            paddingHorizontal: 30,
            backgroundColor: Colors.base_light,
          }}
        >
          <Block
            direction="row"
            justifyContent="space-between"
            style={{ marginTop: 20 }}
          >
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
            <Button
              shadow
              onPress={() => {
                this.props.navigation.navigate("LoginUser");
              }}
              style={styles.logout}
            >
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
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignSelf: "center",
    width: "100%",
    borderRadius: 25,
    backgroundColor: Colors.base_regular,
    overflow: "hidden",
  },
  containerMap: {
    marginTop: 20,
    alignSelf: "center",
    height: 400,
    width: "100%",
    borderRadius: 25,
    backgroundColor: Colors.base_regular,
    overflow: "hidden",
  },
  containerText: {
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
    backgroundColor: Colors.base_regular,
    paddingHorizontal: 60,
    shadowColor: "gray",
    shadowOpacity: 1,
  },
  markerStart: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    overflow: "hidden",
    backgroundColor: "#007AFF",
    borderWidth: 3,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  markerEnd: {
    height: 20,
    width: 20,
    borderRadius: 20 / 2,
    overflow: "hidden",
    backgroundColor: "red",
    borderWidth: 3,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    backgroundColor: "rgba(0,122,255,0.1)",
    borderWidth: 1,
    borderColor: "rgba(0,122,255,0.3)",
    alignItems: "center",
    justifyContent: "center",
  },

  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 25,
    position: "absolute",
    overflow: "hidden",
  },
});

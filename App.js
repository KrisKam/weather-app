import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

export default class App extends Component {

  state = {
    temperature: null,
    humidity: null,
    airPressure: null,
    airQuality: null,
  }

  // componentDidMount() {
  //   fetch("")
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Weather in Denver</Text>
        <Text style={styles.weather}>Temperature:  15&deg; F</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00008B",
  },
  headline: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  weather: {
    textAlign: "center",
    color: "#FFFFFF",
    marginBottom: 5,
  },
});

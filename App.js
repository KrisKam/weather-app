import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import AirQuality from "./components/AirQuality";

export default class App extends Component {

  state = {
    temperature: null,
    humidity: null,
    airPressure: null,
    airQuality: null,
  }

  componentDidMount() {
    fetch("https://api.airvisual.com/v2/city?city=Denver&state=Colorado&country=USA&key=8RFFvdj63HWR7Bk4x")
    .then(response => response.json())
    .then(response => {
      this.setState({
        temperature: (response.data.current.weather.tp * 9/5) + 32,
        humidity: response.data.current.weather.hu,
        airPressure: response.data.current.weather.pr,
        airQuality: response.data.current.pollution.aqius,
      })
    })
    .catch(error => console.error(error))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Weather in Denver</Text>
        <Text style={styles.weather}>Temperature:  {this.state.temperature}&deg; F</Text>
        <Text style={styles.weather}>Humidity: {this.state.humidity}</Text>
        <Text style={styles.weather}>Air Pressure: {this.state.airPressure}</Text>
        <Text style={styles.weather}>Air Quality: {this.state.airQuality}</Text>
        <AirQuality style={styles.weather} quality = {this.state.airQuality} />
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
    margin: 15,
  },
  weather: {
    textAlign: "center",
    color: "#FFFFFF",
    marginBottom: 8,
  },
});

import React, {Component} from "react";
import {Text} from "react-native";


const AirQuality = props => {
  let description = "";
  let quality = props.quality;
  switch (true) {
    case (quality <= 50): 
      description = "Air quality is considered satisfactory, and air pollution poses little or no risk.";
      break;
    case (quality <= 100): 
      description = "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.";
      break;  
    case (quality <= 150): 
      description = "Members of sensitive groups may experience health effects. The general public is not likely to be affected.";
      break;
    case (quality <= 200): 
      description = "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.";
      break;
    case (quality <= 300): 
      description = "Health alert: everyone may experience more serious health effects.";
      break;
    case (quality <= 500): 
      description = "Health warnings of emergency conditions. The entire population is more likely to be affected.";
      break;
    default:
    description = "Error: No AQI reading available."
  }
  return <Text style={props.style}>{description}</Text>
}

export default AirQuality;
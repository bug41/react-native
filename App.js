import React from "react";
import {Alert} from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import axios from "axios";

const API_KEY = "dbbe39d42ac7050b8465bd58f387a0d8";

export default class extends React.Component{
  state = {
    isLoading : true
  };

  getWeather = async(latitude, longitude) =>{

    //console.log(latitude,longitude);

    const {data : {
            main : {temp},
            weather }
          } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    
    this.setState({
      isLoading:false,
      condition:weather[0].main,
      temp:temp
    })
    console.log("TEST" + weather[0].main);
    console.log("TEST2" + temp);
  }
  
  getLocation = async() => {
    try {
      const {status} = await Permissions.askAsync(Permissions.LOCATION);      
      if (status === "granted") {
        const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        // Send To API and get weather
        this.getWeather(latitude,longitude);
        this.setState({isLoading:false});
      } 
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading, temp, condition} = this.state;
    console.log("render" + Math.round(temp), condition);
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}

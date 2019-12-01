import React from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";
import Proptypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions={

    Thunderstorm: {
        iconName : "weather-lightning",
        gradient : ["#4c669f","#192f6a"]
    },
    Drizzle: {
        iconName : "weather-hail",
        gradient : ["#4c669f","#192f6a"]
    },
    Rain: {
        iconName : "weather-pouring",
        gradient : ["#4c669f","#192f6a"]
    },
    Snow: {
        iconName : "weather-snowy",
        gradient : ["#4c669f","#192f6a"]
    },
    Atmosphere: {
        iconName : "weather-hail",
        gradient : ["#4c669f","#192f6a"]
    },
    Mist: {
        iconName : "weather-hail",
        gradient : ["#4c669f","#192f6a"]
    },
    Smoke: {
        iconName : "weather-hail",
        gradient : ["#4c669f","#192f6a"]
    },
    Haze: {
        iconName : "weather-hail",
        gradient : ["#4c669f","#192f6a"]
    },
    Dust: {
        iconName : "weather-hail",
        gradient : ["#4c669f","#192f6a"]
    },
    Fog: {
        iconName : "weather-hail",
        gradient : ["#4c669f","#192f6a"]
    },
    Sand: {
        iconName : "weather-hail",
        gradient : ["#4c669f","#192f6a"]
    },
    Ash: {
        iconName : "weather-hail",
        gradient : ["#4c669f","#192f6a"]
    },
    Squall: {
        iconName : "weather-hail",
        gradient : ["#4c669f","#192f6a"]
    },
    Tornado: {
        iconName : "weather-hail",
        gradient : ["#4c669f","#192f6a"]
    },
    Clear: {
        iconName : "weather-hail",
        gradient : ["#4c669f","#192f6a"]
    },
    Clouds: {
        iconName : "weather-cloudy",
        gradient : ["#4c669f","#192f6a"]
    }
    
}

export default function Weather({temp,condition}){

    console.log("Weather" + temp, condition);
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>        
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName } size={128} color="white" />
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={styles.halfContainer}/>
        </LinearGradient>
        )
}

Weather.prototype = {
    temp:Proptypes.number.isRequired,
    condition:Proptypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds"
    ]).isRequired
}


const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:"center",
        alignItems :  "center"        
    },
    temp:{
        fontSize:32,
        color:"white"
    }
    ,halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
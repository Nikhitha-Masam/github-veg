// import { Alert, StyleSheet,Text,View,ActivityIndicator } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { useState,useEffect } from "react";
// import WeatherInfo from "./WeatherInfo";

// const API_KEYS='8e0a6a4a366b4b9f9f0e54ac1c952b80'
// const Weather=()=>{
//     const [weatherData,setWeatherData]=useState(null);
//     const [loaded,setLoaded]=useState(false);

//     const fetchWeather=async(cityName)=>{
//         try{
//             setLoaded(false);
//             const response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric`)
//             if(response.status==200){
//                 const data=await response.json();
//                 setWeatherData(data)
//             }
//             else{
//                 setWeatherData(null)
//             }
//             setLoaded(true)
//         }
//         catch(error){
//             Alert.alert('Error',error.message)
//         }
//     }

//     useEffect(()=>{
//         fetchWeather('Madhubani')
//     },[])
//     if(!loaded){
//         return(
//             <View style={styles.container}>
                
//                 <ActivityIndicator size='large' color='red'/>
//             </View>
//         )
//     }
//     else if(weatherData===null){
//         return(
//             <View style={styles.container}>
//                 <Text>City not found</Text>
//             </View>
//         )
//     }
//     return(
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Text style={styles.headerTitle}>Weather App</Text>
//             </View>
//             <WeatherInfo weatherData={weatherData} fetchWeather={fetchWeather}/>
//         </View>
//     )
// }
// export default Weather
// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:'#FCF5DB',
        
//     },
//     header:{
//         alignItems:'center',
//         justifyContent:'center',
//         backgroundColor:'#C502EF',
//         height:80,
//     },
//     headerTitle:{
//         fontWeight:'bold'
//     }
// })


import { Alert, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo";

const API_KEY = '8e0a6a4a366b4b9f9f0e54ac1c952b80';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const fetchWeather = async (cityName) => {
    try {
      setLoaded(false);
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
      if (response.status === 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
      setLoaded(true);
    } catch (error) {
      Alert.alert('Error', error.message);
      setLoaded(true);  // Ensure we reset the loaded state
    }
  };

  useEffect(() => {
    fetchWeather('Madhubani');
  }, []);

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  } else if (weatherData === null) {
    return (
      <View style={styles.container}>
        <Text>City not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Weather App</Text>
      </View>
      <WeatherInfo weatherData={weatherData} fetchWeather={fetchWeather} />
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF5DB',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C502EF',
    height: 80,
  },
  headerTitle: {
    fontWeight: 'bold',
  },
});

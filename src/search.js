// import { View,Text,StyleSheet,TextInput,Dimensions } from "react-native";
// import { useState } from "react";
// import { EvilIcons } from "@expo/vector-icons";

// export default function WeatherSearch({fetchWeather}){
//     const [cityName,setCityName]=useState('')
//     return(
//         <View style={styles.searchBar}>
//             <TextInput 
//             placeholder="Search City"
//             value={cityName}
//             onChangeText={(text)=>setCityName(text)}
//             />
//             <EvilIcons name="search" size={28} color='black'/>
//         </View>
//     )
// }

// const styles=StyleSheet.create({
//     searchBar:{
//         flexDirection:'row',
//         alignItems:'center',
//         justifyContent:'space-between',
//         width:Dimensions.get('screen').width-20,
//         borderWidth:1.5,
//         paddingVertical:10,
//         borderRadius:25,
//         marginHorizontal:10,
//         paddingHorizontal:10,
//         backgroundColor:'lightgray'
//     }
// })

import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from "react-native";
import { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";

export default function WeatherSearch({ fetchWeather }) {
  const [cityName, setCityName] = useState('');

  const handleSearch = () => {
    if (cityName.trim()) {
      fetchWeather(cityName);
      setCityName('');
    }
  };

  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search City"
        value={cityName}
        onChangeText={(text) => setCityName(text)}
        style={{ flex: 1 }}
      />
      <TouchableOpacity onPress={handleSearch}>
        <EvilIcons name="search" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width - 20,
    borderWidth: 1.5,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: 'lightgray',
  },
});

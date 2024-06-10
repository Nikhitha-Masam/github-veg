// import { StatusBar } from 'expo-status-bar';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';

// import ManageExpense from './screens/ManageExpense';
// import RecentExpenses from './screens/RecentExpenses';
// import AllExpenses from './screens/AllExpenses';
// import { GlobalStyles } from './constants/styles';
// import IconButton from './components/UI/IconButton';
// import ExpensesContextProvider from './store/expenses-context';

// const Stack = createNativeStackNavigator();
// const BottomTabs = createBottomTabNavigator();

// function ExpensesOverview() {
//   return (
//     <BottomTabs.Navigator
//       screenOptions={({ navigation }) => ({
//         headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
//         headerTintColor: 'white',
//         tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
//         tabBarActiveTintColor: GlobalStyles.colors.accent500,
//         headerRight: ({ tintColor }) => (
//           <IconButton
//             icon="add"
//             size={24}
//             color={tintColor}
//             onPress={() => {
//               navigation.navigate('ManageExpense');
//             }}
//           />
//         ),
//       })}
//     >
//       <BottomTabs.Screen
//         name="RecentExpenses"
//         component={RecentExpenses}
//         options={{
//           title: 'Recent Expenses',
//           tabBarLabel: 'Recent',
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="hourglass" size={size} color={color} />
//           ),
//         }}
//       />
//       <BottomTabs.Screen
//         name="AllExpenses"
//         component={AllExpenses}
//         options={{
//           title: 'All Expenses',
//           tabBarLabel: 'All Expenses',
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="calendar" size={size} color={color} />
//           ),
//         }}
//       />
//     </BottomTabs.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <StatusBar style="light" />
//       <ExpensesContextProvider>
//         <NavigationContainer>
//           <Stack.Navigator
//             screenOptions={{
//               headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
//               headerTintColor: 'white',
//             }}
//           >
//             <Stack.Screen
//               name="ExpensesOverview"
//               component={ExpensesOverview}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="ManageExpense"
//               component={ManageExpense}
//               options={{
//                 presentation: 'modal',
//               }}
//             />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </ExpensesContextProvider>
//     </>
//   );
// }



//login-signup
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';

// import LoginScreen from './screens/LoginScreen';
// import SignupScreen from './screens/SignupScreen';
// import WelcomeScreen from './screens/WelcomScreen';
// import { Colors } from './constants/stylesl';
// import AuthContextProvider, { AuthContext } from './store/auth-context';
// import { useContext } from 'react';
 
// import IconButton from './components/uil/IconButton';

// const Stack = createNativeStackNavigator();

// function AuthStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: Colors.primary500 },
//         headerTintColor: 'white',
//         contentStyle: { backgroundColor: Colors.primary100 },
//       }}
//     >
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Signup" component={SignupScreen} />
//     </Stack.Navigator>
//   );
// }

// function AuthenticatedStack() {
//   const authCtx=useContext(AuthContext)
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: Colors.primary500 },
//         headerTintColor: 'white',
//         contentStyle: { backgroundColor: Colors.primary100 },
//       }}
//     >
//       <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
//         headerRight:({tintColor})=> <IconButton icon="exit" color={tintColor}
//         size={24} onPress={authCtx.logout}
//         />
//       }} />
//     </Stack.Navigator>
//   );
// }

// function Navigation() {

//   const authCtx=useContext(AuthContext)
//   return (
    
//     <NavigationContainer>
//       {!authCtx.authenticate.isAuthenticated && <AuthStack />}
//       {authCtx.authenticate.isAuthenticated && <AuthenticatedStack/>}
//     </NavigationContainer>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <StatusBar style="light" />
//       <AuthContextProvider> 
//       <Navigation />
//     </AuthContextProvider>

//     </>
//   );
// }



// import {View,Text,StyleSheet,ImageBackground,TextInput,ActivityIndicator} from 'react-native'
// import axios from 'axios'
// import { useState,useCallback } from 'react'
// function App(){
//   const [input,setInput]=useState('');
//   const [loading,setLoading]=useState(false)
//   const [data,setData]=useState([])

//   const api={
//     key:'c7yWHooPA1JmGfTGKIY1NfqU5yobtpkI'
//   }

//   const fetchDataHandler=useCallback(()=>{
//     setLoading(true);
//     setInput('');
//     axios({
//       method:"GET",
//       url:
//     })
//   })
//   return(
//     <View style={styles.root}>
//        <ImageBackground source={require('./assets/weather.png')}
//        resizeMode='cover' style={styles.image}>
//        <View>
//         <TextInput placeholder='Enter city Name' onChangeText={text=>setInput({text})} 
//         value={input}
//         placeholderTextColor={'#000'}
//         style={styles.textInput}
//         onSubmitEditing={fetchDataHandler}/>
//        </View>
//        {loading && (
//        <View>
//         <ActivityIndicator size={'large'} color='#000'/>
//        </View>)}
//        </ImageBackground>

//     </View>
//   )
// }
// export default App

// const styles=StyleSheet.create({
//   root:{
//     flex:1
//   },
//   image:{
//     flex:1,
//     flexDirection:'column'
//   },
//   textInput:{
//     borderBottomWidth:3,
//     padding:5,
//     paddingVertical:20,
//     marginVertical:100,
//     marginHorizontal:10,
//     backgroundColor:'white',
//     fontSize:19,
//     borderRadius:16,
//     borderBlockColor:'#df8e00'
//   }
// })



// import { StatusBar } from "expo-status-bar";
// import { StyleSheet,Text,View } from "react-native";
// import Weather from "./src";

// export default function App(){
//   return(
//     <View style={styles.container}>
//       <Weather/>
//       <StatusBar style="auto"/>
//     </View>
//   )
// }

// const styles=StyleSheet.create({
//   container:{
//     flex:1
//   }
// })


//below one is weather app
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import Weather from "./src/index";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Weather />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });


//this is weather app
// import { View,Text,StyleSheet,StatusBar, SafeAreaView } from "react-native";
// import TodoScreen from "./screens/TodoScreen";
// function App(){
//   return(
//     <SafeAreaView>
//     <View style={styles.container}>
//       <TodoScreen/>
//     </View>
//     </SafeAreaView>
//   )
// }
// export default App

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:'#fff',
//     alignItems:'center',
//     justifyContent:'center'
//   }
// })


//this is todolist
// import {View,Text,StyleSheet,SafeAreaView} from 'react-native'
// import TodoScreen from './screens/TodoScreen'
// function App(){
//   return(
//     <SafeAreaView>
//     <View>
//       <TodoScreen/>
//     </View>
//     </SafeAreaView>
//   )
// }
// export default App

//this is ecommerce screen
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Ionicons } from '@expo/vector-icons';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import HomeScreen from './screens/HomeScreen';
// import CategoriesScreen from './screens/CategoriesScreen';
// import OfferScreen from './screens/OfferScreen';
// import SearchScreen from './screens/SearchScreen';
 
// import AccountScreen from './screens/AccountScreen';
// import ProductDetailsScreen from './screens/ProductDetailsScreen';
// import CategoryItemsScreen from './screens/CategoryItemsScreen';
// import { CartProvider } from './screens/CartContext';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function MainNavigator() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           title: 'Home',
//           tabBarLabel: 'Home',
//           tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
//         }}
//       />
//       <Tab.Screen
//         name="Categories"
//         component={CategoriesScreen}
//         options={{
//           title: 'Categories',
//           tabBarLabel: 'Categories',
//           tabBarIcon: () => <MaterialIcons name="category" size={24} color="black" />,
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={SearchScreen}
//         options={{
//           title: 'Search',
//           tabBarLabel: 'Search',
//           tabBarIcon: () => <Ionicons name="search" size={24} color="black" />,
//         }}
//       />
//       <Tab.Screen
//         name="Offers"
//         component={OfferScreen}
//         options={{
//           title: 'Offers',
//           tabBarLabel: 'Offers',
//           tabBarIcon: () => <Ionicons name="pricetag" size={24} color="black" />,
//         }}
//       />
//       <Tab.Screen
//         name="Account"
//         component={AccountScreen}
//         options={{
//           title: 'Account',
//           tabBarLabel: 'Account',
//           tabBarIcon: () => <Ionicons name="person" size={24} color="black" />,
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function App() {
//   return (
//     <CartProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
//           <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
//           <Stack.Screen name="CategoryItems" component={CategoryItemsScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </CartProvider>
//   );
// }

// export default App;


//this is vegetables,fruits app
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen1 from './screens/HomeScreen1';
import ItemDetailsScreen1 from './screens/ItemDetailsScreen1';
import OrderScreen1 from './screens/OrderScreen1';
import CartScreen from './screens/CartScreen';
import ConfirmScreen from './screens/ConfirmScreen';  
import { CartProvider } from './screens/CartContext1';
import OrderDetailsScreen from './screens/OrderDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen1} />
          <Stack.Screen name="ItemDetails" component={ItemDetailsScreen1} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Orders" component={OrderScreen1} />
          <Stack.Screen name="Confirm" component={ConfirmScreen} /> 
          <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />{/* Add ConfirmScreen */}
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}


//this is coffe app

// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Onboarding from './displays/Onbarding';
// import HomeScreen from './displays/HomeScreen';
// import { Ionicons } from '@expo/vector-icons';
// import { View } from 'react-native';
// import Feather from '@expo/vector-icons/Feather';

// const Stack = createNativeStackNavigator();
// const Tabs = createBottomTabNavigator();

// function HomeTabs() {
//   return (
//     <Tabs.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconComponent;
//           let iconColor;

//           if (route.name === 'Home') {
//             iconColor = focused ? '#C67C4E' : 'gray';
//             iconComponent = (
//               <View>
//                 <Ionicons name="home" size={24} color={iconColor} />
//               </View>
//             );
//           } else {
//             iconColor = focused ? '#C67C4E' : 'lightgray';
//             iconComponent = (
//               <View>
//                 <Ionicons name={route.name.toLowerCase()} size={24} color={iconColor} />
//               </View>
//             );
//           }

//           return iconComponent;
//         },
//         tabBarLabel: '',
//       })}
//       tabBarOptions={{
//         activeTintColor: '#C67C4E',
//         inactiveTintColor: 'lightgray',
//         tabBarStyle: {
//           display: 'flex',
//         },
//       }}
//     >
//       <Tabs.Screen name="Home" component={HomeScreen} />
//       <Tabs.Screen name="Heart" component={HomeScreen} />
//       <Tabs.Screen name="Bag" component={HomeScreen} />
//       <Tabs.Screen name="Notifications" component={HomeScreen} />
//     </Tabs.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Onboarding" component={Onboarding} />
//         <Stack.Screen name="HomeTabs" component={HomeTabs} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


// import {Text,View} from 'react-native';
// import AppNavigator from './src/navigation/AppNavigator';
// function App(){
//     return(
//          <AppNavigator/>
//     )
// }
// export default App
import {Text,View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import QuestionScreen from '../screens/QuestionScreen';
const Stack=createNativeStackNavigator();
function AppNavigator(){
    <NavigationContainer>
        <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:"white"}}}>
            <Stack.Screen name="Splash" component={SplashScreen}/>
            <Stack.Screen name="Questions" component={QuestionScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
}
export default AppNavigator
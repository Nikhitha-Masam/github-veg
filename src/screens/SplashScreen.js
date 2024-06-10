import {Pressable, Text,View,StyleSheet,Image} from 'react-native';
import tw from 'twrnc';
function SplashScreen({navigation}){
    return(
        <View style={{flex:1,justifyContent:'space-around',alignItems:'center'}}>
             <Image source={require('./sunrise.png')} style={styles.image}/>
             <Text style={styles.inst}>Instructions</Text>
             <View style={styles.instt}>
                <Text style={styles.text}>Each quiz has four options</Text>
                <Text style={styles.text}>Progress will be shown at Top</Text>
                <Text style={styles.text}>Score would be shown at end</Text>
                <Text style={styles.text}>Each quiz has four options</Text>

             </View>
             <Pressable style={{backgroundColor:'purple',borderRadius:2}} 
             onPress={()=>navigation.navigate('Questions')}>
                <Text style={{color:'white',fontSize:12}}>Start</Text>
             </Pressable>
        </View>
    )
}
export default SplashScreen
const styles=StyleSheet.create({
     image:{
        height:50,
        width:50,
     },
     inst:{
        textAlign:'center',
        fontSize:24,
        height:30,
        width:80,
        padding:2
     },
     instt:{
        backgroundColor:'purple'
     },
     text:{
        color:'white'
     }
})
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Onboarding() {

    const navigation=useNavigation();

    function pressHandler(){
        navigation.navigate('HomeTabs')
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('./6.png')} style={styles.image} />
            <Text style={styles.title}>
                Fall in Love with 
            </Text>
            <Text style={styles.title}>
                Coffee in Blissful 
            </Text>
            <Text style={styles.title}>
            Delight!
            </Text>
            <Text style={styles.subtitle}>
                Welcome to our cozy coffee corner, where
               
            </Text>
            <Text style={styles.sub}>
            every cup is a delight for you.
            </Text>
             
            <TouchableOpacity style={styles.buttonContainer} onPress={pressHandler}>
                <Text style={styles.button}>Get Started</Text>
            
            </TouchableOpacity>
        </ScrollView>
    );
}
export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#050505',
    },
    image: {
        width: 360,
        height: 360,
        marginTop: 20,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF',
        marginTop: 10,
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        color: '#A2A2A2',
        marginTop: 10,
        marginBottom: 0,
    },
    sub:{
       
        fontSize: 20,
        textAlign: 'center',
        color: '#A2A2A2',
        marginTop: 10,
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 10,
        backgroundColor: '#C67C4E',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        width:350,
        height:55
    },
    button: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        justifyContent:'center',
        marginTop:5
         
    },
});

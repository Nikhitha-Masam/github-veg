import {View,Text,StyleSheet, TextInput, Touchable, TouchableOpacity} from 'react-native'
function TodoScreenn(){
    return(
        <View  style={{marginHorizontal:16}}>
            <Text>
                Todo Screen
            </Text>
            <TextInput style={{borderWidth:2,borderColor:"1e90ff",
                borderRadius:6,paddingVertical:12,paddingHorizontal:16,
                
            }}
            placeholder='Add a Task'/>
            <TouchableOpacity style={{backgroundColor:'black',borderRadius:6,paddingVertical:12,colo}}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    )
}
export default TodoScreenn

const styles=StyleSheet.create({

})
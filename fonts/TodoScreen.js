// import { useState } from "react";
// import { FlatList, StyleSheet,Text,TextInput,TouchableOpacity,View } from "react-native";
// import { IconButton } from "react-native-paper";

 
// function TodoScreen(){
// const [todo,setTodo]=useState(" ")
// const [todolist,setTodolist]=useState([])
// const [editedTodo,setEditedTodo]=useState(null)

// const handleAddTodo=()=>{
    
//         setTodolist([...todolist,{id:Date.now().toString(),title:todo}])
//         setTodo('');
    
// }
// const handleDeleteTodo=(id)=>{
// const updatedTodolist=todolist.filter((todo)=>todo.id!==id)
// setTodolist(updatedTodolist)
// }
// const handleEditTodo=(todo)=>{
//     setEditedTodo(todo)
//     setTodo(todo.title)
// }
// const handleUpdateTodo=(id)=>{
//     const updatedTodos=todolist.map((item)=>{
//         if(item.id===editedTodo.id){
//             return {...item,title:todo}
//         }
//         return item

        

//     })
//     setTodolist(updatedTodos)
//         setEditedTodo(null)
//         setTodo('')

//     }

//     const renderTodo=({item,index})=>{
//         return(
//             <View style={{backgroundColor:'#1e90ff',borderRadius:6,
//             paddingHorizontal:6,paddingVertical:8,
//                 marginBottom:12,flexDirection:'row',alignItems:'center',elevation:4
//             }}>
                
//                 <Text style={{color:"#fff",fontSize:20,fontWeight:"800",flex:1}} >
//                     {item.title}</Text>
//                 <IconButton icon="pencil" iconColor="#fff" onPress={()=>handleEditTodo(item)}/>
//                 <IconButton icon="delete" iconColor="#fff" onPress={()=>handleDeleteTodo(item.id)}/>
//             </View>
//         )
//     }
//     return(
//         <View style={{marginHorizontal:16}}>
//         <TextInput style={{borderWidth:2, borderColor:"#1e90ff",borderRadius:6,paddingVertical:12,
//                 paddingHorizontal:16, marginTop:50
//             }} placeholder="Add a task" value={todo} onChangeText={(userText)=>setTodo(userText)}/>
//             {
//                 editedTodo ?  <TouchableOpacity style={{backgroundColor:'#000',borderRadius:6,paddingVertical:8,
//                 alignItems:'center',marginVertical:34,
//             }} onPress={()=>handleUpdateTodo}>
//                 <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Save</Text>
//             </TouchableOpacity> :  <TouchableOpacity style={{backgroundColor:'#000',borderRadius:6,paddingVertical:8,
//                 alignItems:'center',marginVertical:34,
//             }} onPress={()=>handleAddTodo}>
//                 <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Add</Text>
//             </TouchableOpacity>
//             }
//             <FlatList data={todolist} renderItem={renderTodo}/>

//             {
//                 todolist.length<=0 && <Text>Start adding tour task</Text>
//             }
//         </View>
//     )
// }
// export default TodoScreen
// const styles=StyleSheet.create({

// })

import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { IconButton } from "react-native-paper";

function TodoScreen() {
    const [todo, setTodo] = useState("");
    const [todolist, setTodolist] = useState([]);
    const [editedTodo, setEditedTodo] = useState(null);

    const handleAddTodo = () => {
        setTodolist([...todolist, { id: Date.now().toString(), title: todo }]);
        setTodo("");
    };

    const handleDeleteTodo = (id) => {
        const updatedTodolist = todolist.filter((todo) => todo.id !== id);
        setTodolist(updatedTodolist);
    };

    const handleEditTodo = (todo) => {
        setEditedTodo(todo);
        setTodo(todo.title);
    };

    const handleUpdateTodo = () => {
        const updatedTodos = todolist.map((item) => {
            if (item.id === editedTodo.id) {
                return { ...item, title: todo };
            }
            return item;
        });
        setTodolist(updatedTodos);
        setEditedTodo(null);
        setTodo("");
    };

    const renderTodo = ({ item }) => {
        return (
            <View style={styles.todoItem}>
                <Text style={styles.todoText}>{item.title}</Text>
                <IconButton icon="pencil" iconColor="#fff" onPress={() => handleEditTodo(item)} />
                <IconButton icon="delete" iconColor="#fff" onPress={() => handleDeleteTodo(item.id)} />
            </View>
        );
    };

    return (
        <View style={{ marginHorizontal: 16 }}>
            <TextInput
                style={styles.input}
                placeholder="Add a task"
                value={todo}
                onChangeText={(userText) => setTodo(userText)}
            />
            {editedTodo ? (
                <TouchableOpacity style={styles.button} onPress={handleUpdateTodo}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            )}
            <FlatList data={todolist} renderItem={renderTodo} />
            {todolist.length <= 0 && <Text>Start adding your tasks</Text>}
        </View>
    );
}

export default TodoScreen;

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: "#1e90ff",
        borderRadius: 6,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginTop:60
    },
    button: {
        backgroundColor: '#000',
        borderRadius: 6,
        paddingVertical: 8,
        alignItems: 'center',
        marginVertical: 34,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    todoItem: {
        backgroundColor: '#1e90ff',
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 8,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 4,
    },
    todoText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "800",
        flex: 1,
    },
});

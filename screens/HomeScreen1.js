import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { items } from './dummy_data';
import { useNavigation } from '@react-navigation/native';

const HomeScreen1 = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ItemDetails', { item })}
                        style={styles.item}
                    >
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                    </TouchableOpacity>
                )}
                numColumns={2}
                columnWrapperStyle={styles.row}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 8,
        borderRadius:8
    },
    item: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
        alignItems: 'center',
         
        padding: 10,
    },
    row: {
        flex: 1,
        justifyContent: 'space-between',
    },
});

export default HomeScreen1;

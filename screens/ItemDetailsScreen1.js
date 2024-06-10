// ItemDetailsScreen.js
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { CartContext } from './CartContext1';

const ItemDetailsScreen = () => {
    const route = useRoute();
    const { item } = route.params;
    const navigation = useNavigation();
    const [addedToCart, setAddedToCart] = useState(false);
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(item);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000); // Reset after 2 seconds
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>Price: {item.price}</Text>
            <Button
                onPress={handleAddToCart}
                title='Add to Cart'
            />
            <Button
                onPress={() => navigation.navigate('Cart')}
                title='View Cart'
            />
            <Button
                onPress={() => navigation.navigate('Home')}
                title='Go to Home'
            />
            {addedToCart && <Text style={styles.addedText}>Item added to cart!</Text>}
        </View>
    );
};

export default ItemDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
        borderRadius: 8
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 18
    },
    name: {
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom: 15
    },
    price: {
        fontSize: 20,
        paddingBottom: 15
    },
    addedText: {
        marginTop: 10,
        color: 'green',
        fontWeight: 'bold'
    }
});

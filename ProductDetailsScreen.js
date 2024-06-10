import React, { useContext ,useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Image} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CartContext } from './CartContext';


const ProductDetailsScreen = ({ route }) => {
  // Check if route or route.params is undefined
  if (!route || !route.params || !route.params.product) {
    return (
      <View style={styles.container}>
        <Text>No product details available.</Text>
      </View>
    );
  }

  const { product } = route.params;
  const {addToCart}=useContext(CartContext)
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
      addToCart(product)
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 3000);
       
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Image source={{uri:product.image}} style={styles.image}/>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price} >{product.price}</Text>
      <Text style={styles.originalPrice}>{product.originalPrice}</Text>
      <Text style={styles.discount}>{product.discount}</Text>
      
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
      {addedToCart && <Text style={styles.confirmationText}>Item added to cart!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image:{
    width:300,
    height:300
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  additionalInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    fontSize: 20,
    color: 'green',
  },
  originalPrice: {
    fontSize: 18,
    color: 'gray',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
  discount: {
    fontSize: 25,
    color: 'red',
  },
  confirmationText: {
    marginTop: 10,
    fontSize: 16,
    color: 'green',
  },

});

export default ProductDetailsScreen;

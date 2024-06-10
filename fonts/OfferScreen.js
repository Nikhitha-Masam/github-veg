import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProductDetailsScreen from '../ProductDetailsScreen';

const offers = [
  {
    id: '1',
    name: 'Smartphone',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSah_Ue7KBL8YXyA2K92hXZTfhhH9RR_j2Hhw&s',
    price: 'Rs.10,000',
    originalPrice: 'Rs.15,000',
    discount: '40% off',
    description: 'Latest smartphone with amazing features.',
  },
  {
    id: '2',
    name: 'Running Shoes',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNG2hPgeqjxmp7pJ053O_ak_eHF4RLijGW9g&s',
    price: 'Rs. 1000',
    originalPrice: 'Rs.1500',
    discount: '33% off',
    description: 'Comfortable running shoes for all terrains.',
  },
  {
    id: '3',
    name: 'Wrist Watch',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD85T9lCeMeviPHtEjWuQDsXpQKJpb1X10ew&s',
    price: 'Rs.1500',
    originalPrice: 'Rs.2000',
    discount: '40% off',
    description: 'Elegant wrist watch with leather strap.',
  },
  {
    id: '4',
    name: 'Designer Dress',
    image: 'https://maharanidesigner.com/wp-content/uploads/2020/01/new-designer-dress-images.jpg',
    price: 'Rs.1000',
    originalPrice: 'Rs.2000',
    discount: '50% off',
    description: 'Beautiful designer dress for special occasions.',
  },
];

const OfferScreen = () => {
  const navigation = useNavigation();

  const handleItem = (product) => {
    navigation.navigate('ProductDetailsScreen', { product: product });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={offers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.offerItem} onPress={() => handleItem(item)}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.originalPrice}>{item.originalPrice}</Text>
              </View>
              <Text style={styles.discount}>{item.discount}</Text>
            </View>
          </TouchableOpacity>
          
        )}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  offerItem: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    elevation: 2,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginVertical: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
  originalPrice: {
    fontSize: 14,
    color: 'gray',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
  discount: {
    fontSize: 14,
    color: 'red',
  },
});

export default OfferScreen;

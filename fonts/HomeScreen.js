import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Sample data for different sections
const featuredProducts = [
  { id: '1', name: 'Watch', image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800', price: '$199.99' },
  { id: '2', name: 'Shoes', image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/JP/SJ/ED/38630640/casual-shoes-500x500.jpg', price: '$79.99' },
  { id: '3', name: 'Sarees', image: 'https://www.shutterstock.com/image-photo/closeup-view-banares-silk-saris-260nw-1335151268.jpg', price: '$89.45' },
  { id: '4', name: 'Dresses', image: 'https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwf1713c11/images/aw23/fstve2058aw23nvy_1.jpg?sw=502&sh=753', price: '$56.99' },
];

const categories = [
  { id: '1', name: 'Watch', image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg', price: '$199.99' },
  { id: '2', name: 'Shoes', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww', price: '$79.99' },
  { id: '3', name: 'Sarees', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzz7Jxni1A4euJ7ygmIVdPZKXhmTbokNeP0Q&s', price: '$89.45' },
  { id: '4', name: 'Dresses', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxebrNHkcfHLg--8EbYi-U0JEDle2u9OZTGg&s', price: '$56.99' },
];

const latestArrivals = [
  { id: '1', name: 'Sarees', image: 'https://www.shutterstock.com/image-photo/closeup-view-banares-silk-saris-260nw-1335151268.jpg', price: '$89.45' },
  {id: '2', name: 'Dresses', image: 'https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwf1713c11/images/aw23/fstve2058aw23nvy_1.jpg?sw=502&sh=753', price: '$56.99'},
  { id: '3', name: 'Shoes', image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/JP/SJ/ED/38630640/casual-shoes-500x500.jpg', price: '$79.99' },
  
];

const bestSellings = [
  { id: '1', name: 'Watch', image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg', price: '$199.99' },
  { id: '2', name: 'Shoes', image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/JP/SJ/ED/38630640/casual-shoes-500x500.jpg', price: '$79.99' },
  { id: '3', name: 'Sarees', image: 'https://www.shutterstock.com/image-photo/closeup-view-banares-silk-saris-260nw-1335151268.jpg', price: '$89.45' },
  { id: '4', name: 'Dresses', image: 'https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwf1713c11/images/aw23/fstve2058aw23nvy_1.jpg?sw=502&sh=753', price: '$56.99' },
];

const specialOffers = [
  { id: '1', name: 'Watch', image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg', price: '$199.99' },
  { id: '2', name: 'Shoes', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww', price: '$79.99' },
  { id: '3', name: 'Sarees', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzz7Jxni1A4euJ7ygmIVdPZKXhmTbokNeP0Q&s', price: '$89.45' },
  { id: '4', name: 'Dresses', image: 'https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwf1713c11/images/aw23/fstve2058aw23nvy_1.jpg?sw=502&sh=753', price: '$56.99' },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderProduct = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetailsScreen', { product: item })}>
      <View style={styles.productItem}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Featured Products</Text>
      <FlatList
        data={featuredProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />

      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />

      <Text style={styles.sectionTitle}>Latest Arrivals</Text>
      <FlatList
        data={latestArrivals}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />

      <Text style={styles.sectionTitle}>Best Sellings</Text>
      <FlatList
        data={bestSellings}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />

      <Text style={styles.sectionTitle}>Special Offers</Text>
      <FlatList
        data={specialOffers}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  horizontalList: {
    paddingBottom: 16,
  },
  productItem: {
    marginRight: 16,
    width: 150,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
  },
});

export default HomeScreen;

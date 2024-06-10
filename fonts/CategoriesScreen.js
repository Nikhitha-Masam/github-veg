import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const categories = [
  { id: '1', name: 'Watches', offer: 'Up to 20% OFF', image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg' },
  { id: '2', name: 'Shoes', offer: 'Up to 18% OFF', image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/JP/SJ/ED/38630640/casual-shoes-500x500.jpg' },
  { id: '3', name: 'Shirts', offer: 'Up to 25% OFF', image: 'https://m.media-amazon.com/images/I/910ERVSL4wL._AC_UY1100_.jpg' },
  { id: '4', name: 'Dresses', offer: 'Up to 40% OFF', image: 'https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwf1713c11/images/aw23/fstve2058aw23nvy_1.jpg?sw=502&sh=753' },
  { id: '5', name: 'Sarees', offer: 'Up to 50% OFF', image: 'https://www.shutterstock.com/image-photo/closeup-view-banares-silk-saris-260nw-1335151268.jpg' },
  { id: '6', name: 'Phones', offer: 'Up to 38% OFF', image: 'https://www.khoslaonline.com/wp-content/uploads/2023/06/ONE-PLUS-NORD-CE-2-LITE-5G-BLUE-TIDE-6GB128GB-300x300.png' },
  { id: '7', name: 'Furniture', offer: 'Up to 56% OFF', image: 'https://studiokook.com/cdn/shop/products/comb-11_wn_-min.jpg?v=1660288227&width=1445' },
];

const CategoriesScreen = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (categoryId, categoryName) => {
    navigation.navigate('CategoryItems', { categoryId, categoryName });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCategoryPress(item.id, item.name)}>
            <View style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={{ flexDirection: 'column' }}>
                <Text style={[styles.text, { color: 'blue', fontWeight: 'bold' }]}>{item.offer}</Text>
                <Text style={styles.text}>{item.name}</Text>
              </View>
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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 15,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 6,
    marginRight: 15,
  },
  text: {
    fontSize: 25,
  },
});

export default CategoriesScreen;

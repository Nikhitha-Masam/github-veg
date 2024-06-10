// import React, { useContext, useState } from 'react';
// import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // 
// import { CartContext } from './CartContext1';

// function CartScreen() {
//     const [quantity, setQuantity] = useState({});
//     const [address, setAddress] = useState('');
//     const { cartItems, removeFromCart } = useContext(CartContext);
//     const navigation = useNavigation();  

//     const handleQuantityChange = (id, value) => {
//         setQuantity(prevQuantity => ({ ...prevQuantity, [id]: value }));
//     };

//     const calculateTotal = () => {
//         return cartItems.reduce((total, item) => {
//             const itemTotal = parseInt(item.price.replace('Rs.', '')) * (quantity[item.id] ? parseInt(quantity[item.id]) : 1);
//             return total + itemTotal;
//         }, 0) + 80;  
//     };

//     const handlePlaceOrder = () => {

//         navigation.navigate('Orders');
//     };

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={cartItems}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => (
//                     <View style={styles.cartItem}>
//                         <Text>{item.name}  </Text>
//                         <TextInput
//                             style={styles.input}
//                             placeholder='Quantity in kgs'
//                             keyboardType='numeric'
//                             value={quantity[item.id] ? String(quantity[item.id]) : ''}
//                             onChangeText={(value) => handleQuantityChange(item.id, value)}
//                         />
//                         <Button title="Remove" onPress={() => removeFromCart(item.id)} />
//                     </View>
//                 )}
//             />
//             <View style={styles.billDetails}>
//                 <Text>Bill Details:</Text>
//                 <Text>Item Total: {calculateTotal() - 80}</Text>
//                 <Text>Handling Charges: 30</Text>
//                 <Text>Delivery Charges: 50</Text>
//                 <Text>Total Bill: {calculateTotal()}</Text>
//             </View>
//             <TextInput
//                 style={styles.addressInput}
//                 placeholder='Enter delivery address'
//                 value={address}
//                 onChangeText={setAddress}
//             />
//             <Button title="Place Order" onPress={handlePlaceOrder} />
//         </View>
//     );
// }

// export default CartScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//     },
//     cartItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         marginBottom: 16,
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         padding: 8,
//         width: 100,
//     },
//     billDetails: {
//         marginTop: 16,
//     },
//     addressInput: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         padding: 8,
//         marginBottom: 16,
//         width: '100%',
//     },
// });


import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from './CartContext1';

function CartScreen() {
  const [quantity, setQuantity] = useState({});
  const [address, setAddress] = useState('');
  const { cartItems, removeFromCart, setCartItems } = useContext(CartContext);
  const navigation = useNavigation();

  useEffect(() => {
    
    const initialQuantityState = {};
    cartItems.forEach(item => {
      initialQuantityState[item.id] = item.quantity;
    });
    setQuantity(initialQuantityState);
  }, [cartItems]);

  const handleQuantityChange = (id, value) => {
    setQuantity(prevQuantity => ({ ...prevQuantity, [id]: value }));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemTotal = parseInt(item.price.replace('Rs.', '')) * (quantity[item.id] ? parseInt(quantity[item.id]) : 1);
      return total + itemTotal;
    }, 0) + 80;
  };

  const handlePlaceOrder = () => {
    const updatedCartItems = cartItems.map(item => ({
      ...item,
      quantity: quantity[item.id] ? parseInt(quantity[item.id]) : 1,  
    }));
    setCartItems(updatedCartItems);
    const totalBill = calculateTotal();
    navigation.navigate('Confirm', { address, totalBill });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.name}  </Text>
            <TextInput
              style={styles.input}
              placeholder='Quantity in kgs'
              keyboardType='numeric'
              value={quantity[item.id] ? String(quantity[item.id]) : ''}
              onChangeText={(value) => handleQuantityChange(item.id, value)}
            />
            <Button title="Remove" onPress={() => removeFromCart(item.id)} />
          </View>
        )}
      />
      <View style={styles.billDetails}>
        <Text>Bill Details:</Text>
        <Text>Item Total: {calculateTotal() - 80}</Text>
        <Text>Handling Charges: 30</Text>
        <Text>Delivery Charges: 50</Text>
        <Text>Total Bill: {calculateTotal()}</Text>
      </View>
      <TextInput
        style={styles.addressInput}
        placeholder='Enter delivery address'
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Place Order" onPress={handlePlaceOrder} />
    </View>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    width: 100,
  },
  billDetails: {
    marginTop: 16,
  },
  addressInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    width: '100%',
  },
});

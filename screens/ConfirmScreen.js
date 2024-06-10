import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartContext } from './CartContext1';

const ConfirmScreen = () => {
  const { params } = useRoute();
  const { address, totalBill } = params;
  const [deliveryDate, setDeliveryDate] = useState('');
  const { cartItems, setCartItems, setOrderHistory, clearCart } = useContext(CartContext);
  const navigation = useNavigation();

  useEffect(() => {
    const today = new Date();
    const delivery = new Date(today);
    delivery.setDate(today.getDate() + 5);
    setDeliveryDate(delivery.toDateString());

    const orderId = new Date().getTime().toString().slice(-9); // Generate a formatted order ID
    const updatedCartItems = cartItems.map(item => ({
      ...item,
      orderId,
      address, // Pass the delivery address here
      deliveryDate,
      status: 'Order Placed'
    }));

    setCartItems(updatedCartItems);
    setOrderHistory(prevHistory => [...prevHistory, ...updatedCartItems]);
    clearCart(); // Clear the cart after order is placed

    // Update status to "Completed" after 10 minutes
    const statusUpdateTimer = setTimeout(() => {
      setCartItems(prevItems => prevItems.map(item => ({
        ...item,
        status: 'Completed',
      })));
    }, 10 * 60 * 1000); // 10 minutes

    return () => clearTimeout(statusUpdateTimer); // Clear timer on unmount
  }, []);

  const handleCancelOrder = () => {
    setCartItems(prevItems => prevItems.map(item => ({
      ...item,
      status: 'Cancelled',
    })));
    navigation.navigate('Orders');
  };

  const handleGoToOrders = () => {
    navigation.navigate('Orders');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Order Confirmed!</Text>
      <Text style={styles.text}>Delivery Address: {address}</Text>
      <Text style={styles.text}>Delivery Date: {deliveryDate}</Text>
      <Text style={styles.text}>Total Bill: {totalBill}</Text>
      <Button title="Cancel Order" onPress={handleCancelOrder} />
      <Button title="Go to Orders" onPress={handleGoToOrders} />
    </View>
  );
};

export default ConfirmScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
});

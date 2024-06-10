
//this code is to show items which were added to cart and order placed


// import React, { useState, useContext, useEffect } from 'react';
// import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image, Button } from 'react-native';
// import { CartContext } from './CartContext1';
// import { useNavigation } from '@react-navigation/native';

// function OrderScreen1() {
//   const [selectedButton, setSelectedButton] = useState('All Orders');
//   const { orderHistory, setCartItems, addToCart } = useContext(CartContext);
//   const navigation = useNavigation();

//   useEffect(() => {
     
//     setCartItems(prevItems => prevItems.map(item => ({
//       ...item,
//       deliveryDate: '11-06-2024',
//       deliveryTime: '3:05 PM',
//     })));
//   }, []);

//   const groupedOrders = orderHistory.reduce((acc, item) => {
//     const existingOrder = acc.find(order => order.orderId === item.orderId);
//     if (existingOrder) {
//       existingOrder.items.push(item);
//     } else {
//       acc.push({ orderId: item.orderId, items: [item], status: item.status });
//     }
//     return acc;
//   }, []);

//   const filteredOrders = groupedOrders.filter(order => {
//     if (selectedButton === 'All Orders') return true;
//     if (selectedButton === 'Completed') return order.status === 'Completed';
//     if (selectedButton === 'Order Placed') return order.status === 'Order Placed';
//     if (selectedButton === 'Cancelled') return order.status === 'Cancelled';
//     return false;
//   });

//   const handleCancelOrder = (orderId) => {
//     setCartItems(prevItems => prevItems.map(item => {
//       if (item.orderId === orderId) {
//         return { ...item, status: 'Cancelled' };
//       }
//       return item;
//     }));
//   };

//   const handleOrderAgain = (items) => {
//     items.forEach(item => {
//       const { id, name, price, address, image } = item;
//       addToCart({ id, name, price, address, deliveryDate: item.deliveryDate, deliveryTime: item.deliveryTime, quantity: item.quantity, image });
//     });
//   };

//   return (
//     <View>
//       <View style={styles.container}>
//         <Image style={styles.image1} source={require('./arrow_back.png')} />
//         <Text style={styles.text}>My Orders</Text>
//         <Image style={styles.image2} source={require('./mdi_cart-outline.png')} />
//       </View>
//       <View style={styles.buttonContainer}>
//         {['All Orders', 'Completed', 'Pending', 'Cancelled','Refund'].map(status => (
//           <TouchableOpacity
//             key={status}
//             style={[styles.button, selectedButton === status && { backgroundColor: '#D89B00' }]}
//             onPress={() => setSelectedButton(status)}>
//             <Text>{status}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <FlatList
//         data={filteredOrders}
//         keyExtractor={(order) => order.orderId}
//         renderItem={({ item: order }) => (
//           <View style={styles.orderItem}>
//             <TouchableOpacity
//               onPress={() => navigation.navigate('OrderDetails', { item: order })}>
//               <View style={styles.orderContent}>
//                 <View style={styles.imageColumn}>
//                   {order.items.map((orderItem, index) => (
//                     <Image key={index} style={styles.itemImage} source={{ uri: orderItem.image }} />
//                   ))}
//                 </View >
//                 <View style={styles.detailsColumn}>
//                   {order.items.map((orderItem, index) => (
//                     <React.Fragment key={index}>
//                       <Text style={styles.name1}>{orderItem.name}</Text>
//                       <Text style={styles.quantity}>Qty: {orderItem.quantity} kgs</Text>
//                     </React.Fragment>
//                   ))}
//                   <Text style={styles.order}>Order ID: {order.orderId}</Text>
//                   <Text style={styles.date}> 11/06/2024 at 03:15 PM</Text>
//                 </View>
//                 <View style={styles.priceColumn}>
//                   <Text style={styles.priceText}>
//                     Rs. {order.items.reduce((total, item) => total + parseInt(item.price.replace('Rs.', '')) * item.quantity, 0)+80}
//                   </Text>
//                   <View style={styles.status1}>
//                     <View style={[styles.statusContainer, order.status === 'Cancelled' && { borderColor: 'red' }]}>
//                       <Text style={styles.statusText}>{order.status}</Text>
//                     </View>
//                   </View>
//                 </View>
//               </View>
//             </TouchableOpacity>
//             {order.status === 'Completed' && (
//               <View>
//                 <Button title="Order Again" onPress={() => handleOrderAgain(order.items)} />
//                 <Button title="Rate Order" onPress={() => {}} />
//               </View>
//             )}
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// export default OrderScreen1;

// const styles = StyleSheet.create({
//   container: {
//     width: 375,
//     height: 44,
//     top: 27,
//     padding: 0,
//     paddingRight: 3,
//     paddingBottom: 0,
//     paddingLeft: 3,
//     justifyContent: 'space-between',
//     flexDirection: 'row'
//   },
//   text: {
//     fontSize: 18,
//     lineHeight: 20.7,
//     textAlign: 'center'
//   },
//   image1: {
//     width: 44,
//     height: 44,
//     paddingTop: 10,
//     paddingRight: 17,
//     paddingBottom: 15,
//     paddingLeft: 14,
//     opacity: 1,
//   },
//   image2: {
//     width: 44,
//     height: 44,
//     opacity: 1,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20,
//     opacity: 1,
//     paddingTop: 20
//   },
//   button: {
//     width: 90,
//     height: 32,
//     paddingTop: 8,
//     paddingRight: 16,
//     paddingBottom: 8,
//     paddingLeft: 16,
//     borderRadius: 20,
//     backgroundColor: 'lightgray',
//     opacity: 1,
//   },
//   name1: {
//     fontWeight: '500',
//     fontSize: 14,
//     lineHeight: 16.1,
//     color: '#000000',
//   },
//   status1: {
//     marginTop: 20
//   },
//   quantity: {
//     fontSize: 10,
//     fontWeight: '400',
//     lineHeight: 11.5,
//     color: '#777777',
//   },
//   order: {
//     fontSize: 10,
//     fontWeight: '500',
//     lineHeight: 11.5,
//     color: '#c4c4c4'
//   },
//   date: {
//     fontSize: 10,
//     fontWeight: '500',
//     lineHeight: 11.5,
//     color: '#c4c4c4'
//   },
//   orderItem: {
//     borderWidth: 1,
//     borderColor: 'lightgray',
//     padding: 10,
//     marginVertical: 5,
//   },
//   orderContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   imageColumn: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   detailsColumn: {
//     flex: 2,
//     flexDirection: 'column',
//     marginLeft: 0,
//     justifyContent: 'space-between'
//   },
//   priceColumn: {
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'flex-end',
//   },
//   itemImage: {
//     width: 65,
//     height: 65,
//     resizeMode: 'cover',
//     marginBottom: 5,
//     borderRadius: 4
//   },
//   priceText: {
//     width: 50,
//     height: 16,
//     marginBottom: 5,
//   },
//   statusContainer: {
//     borderWidth: 1,
//     borderColor: 'blue',
//     borderRadius: 5,
//     paddingHorizontal: 5,
//     paddingVertical: 2,
//   },
//   statusText: {
//     color: '#013062'
//   },
// });


 //this code is to filter item according to their status with dummy data
import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image, Button,ScrollView } from 'react-native';
import { CartContext } from './CartContext1';
import { useNavigation } from '@react-navigation/native';

export const items = [
  {
    id: '1',
    name: 'Tomatoes',
    image: 'https://cdn.pixabay.com/photo/2011/03/16/16/01/tomatoes-5356_640.jpg',
    price: 'Rs.50',
    status: 'Pending'
  },
  {
    id: '2',
    name: 'Brinjal',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbDCsbdREaFvCwY6vNYsxKXdubkq2cCLOQw&s',
    price: 'Rs.40',
    status: 'Refund'
  },
  {
    id: '3',
    name: 'Potato',
    image: 'https://img.freepik.com/free-photo/basket-white-potatoes_1268-25051.jpg',
    price: 'Rs.30',
    status: 'Completed'
  },
  {
    id: '4',
    name: 'Mangoes',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSumVkPdr5S7ijVQPtcijI8kGwq8QEk7MbZUQ&s',
    price: 'Rs.70',
    status: 'Cancelled'
  },
  {
    id: '5',
    name: 'Banana',
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400',
    price: 'Rs.60',
    status: 'Pending'
  },
  {
    id: '6',
    name: 'Grapes',
    image: 'https://smartyield.in/wp-content/uploads/2021/06/Green-grape.png',
    price: 'Rs.80',
    status: 'Pending'
  },
  {
    id: '7',
    name: 'Ladies Finger',
    image: 'https://www.netmeds.com/images/cms/wysiwyg/blog/2022/03/1647423858_Okra_big_1.jpg',
    price: 'Rs.20',
    status: 'Completed'
  },
  {
    id: '8',
    name: 'Beetroot',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/316774192/AM/QQ/MA/3042133/fresh-red-beetroot.jpg',
    price: 'Rs.90',
    status: 'Refund'
  },
  {
    id: '9',
    name: 'Carrot',
    image: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/04/23175719/shutterstock_440493100-1.jpg',
    price: 'Rs.60',
    status: 'Completed'
  },
  {
    id: '10',
    name: 'Kiwi',
    image: 'https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg',
    price: 'Rs.150',
    status: 'Cancelled'
  },
];

function OrderScreen1() {
  const [selectedButton, setSelectedButton] = useState('All Orders');
  const { setCartItems, addToCart } = useContext(CartContext);
  const navigation = useNavigation();

  useEffect(() => {
    setCartItems(prevItems => prevItems.map(item => ({
      ...item,
      deliveryDate: '13-06-2024',
      deliveryTime: '03:15 PM',
      quantity: 1
    })));
  }, []);

  const filteredOrders = items.filter(item => {
    if (selectedButton === 'All Orders') return true;
    return item.status === selectedButton;
  });

  const handleOrderAgain = (items) => {
    items.forEach(item => {
      const { id, name, price, address, image } = item;
      addToCart({ id, name, price, address, deliveryDate: item.deliveryDate, deliveryTime: item.deliveryTime, quantity: item.quantity, image });
    });
  };

  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.image1} source={require('./arrow_back.png')} />
        <Text style={styles.text}>My Orders</Text>
        <Image style={styles.image2} source={require('./mdi_cart-outline.png')} />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.buttonScrollContainer}>
      <View style={styles.buttonContainer}>
        {['All Orders', 'Completed', 'Pending', 'Cancelled', 'Refund'].map(status => (
          <TouchableOpacity
            key={status}
            style={[
              styles.button,
              selectedButton === status 
                ? { backgroundColor: '#D89B00' } 
                : { backgroundColor: selectedButton === 'All Orders' ? 'lightgray' : 'lightgray' }
            ]}
            onPress={() => setSelectedButton(status)}
          >
            <Text>{status}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>

      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <TouchableOpacity
              onPress={() => navigation.navigate('OrderDetails', { item })}>
              <View style={styles.orderContent}>
                <View style={styles.imageColumn}>
                  <Image style={styles.itemImage} source={{ uri: item.image }} />
                </View >
                <View style={styles.detailsColumn}>
                  <Text style={styles.name1}>{item.name}</Text>
                  <Text style={styles.quantity}>Qty: {item.quantity} kg</Text>
                  <Text style={styles.order}>Order ID: xxxxxxxx</Text>
                  <Text style={styles.date}>13/06/2024 at 03:15 PM</Text>
                </View>
                <View style={styles.priceColumn}>
                <Text style={styles.priceText}>
  Rs. {isNaN(parseInt(item.price.replace('Rs.', ''))) ? '0' : (parseInt(item.price.replace('Rs.', '')) + 80)}
</Text>

                  <View style={styles.status1}>
                    <View style={[styles.statusContainer, item.status === 'Cancelled' && { borderColor: 'red' }]}>
                      <Text style={styles.statusText}>{item.status}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            {item.status === 'Completed' && (
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button} onPress={() => handleOrderAgain([item])}>
                  <Text style={styles.buttonText}>Order Again</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text style={styles.buttonText}>Rate Order</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
}

export default OrderScreen1;

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 44,
    top: 27,
    padding: 0,
    paddingRight: 3,
    paddingBottom: 0,
    paddingLeft: 3,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  buttonScrollContainer: {
    flexGrow: 1,
  },
  text: {
    fontSize: 18,
    lineHeight: 20.7,
    textAlign: 'center'
  },
  image1: {
    width: 44,
    height: 44,
    paddingTop: 10,
    paddingRight: 17,
    paddingBottom: 15,
    paddingLeft: 14,
    opacity: 1,
  },
  image2: {
    width: 44,
    height: 44,
    opacity: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    opacity: 1,
    paddingTop: 20
  },
  button: {
    width: 90,
    height: 32,
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    borderRadius: 20,
    backgroundColor: 'lightgray',
    opacity: 1,
  },
  name1: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16.1,
    color: '#000000',
  },
  status1: {
    marginTop: 20
  },
  quantity: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 11.5,
    color: '#777777',
  },
  order: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 11.5,
    color: '#c4c4c4'
  },
  date: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 11.5,
    color: '#c4c4c4'
  },
  orderItem: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    marginVertical: 5,
  },
  orderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageColumn: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  detailsColumn: {
    flex: 2,
    flexDirection: 'column',
    marginLeft: 0,
    justifyContent: 'space-between'
  },
  priceColumn: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  itemImage: {
    width: 65,
    height: 65,
    resizeMode: 'cover',
    marginBottom: 5,
    borderRadius: 4
  },
  priceText: {
    width: 50,
    height: 16,
    marginBottom: 5,
  },
  statusContainer: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  statusText: {
    color: '#013062'
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    width: 120,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#D89B00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});


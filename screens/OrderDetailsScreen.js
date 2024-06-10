// import React from 'react';
// import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
// import { useRoute } from '@react-navigation/native';

// const OrderDetailsScreen = () => {
//   const { params } = useRoute();
// const { item } = params;

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Image style={styles.image1} source={require('./arrow_back.png')} />
//         <Text style={styles.text}>My Orders</Text>
//         <Image style={styles.image2} source={require('./mdi_cart-outline.png')} />
//       </View>
//       <View style={styles.container2}>
//         <Text style={styles.itemList}>Item List</Text>
//         <View style={styles.container3}>
//           <Image style={styles.image3} source={require('./carbon_help.png')} />
//           <Text style={styles.help}>Help</Text>
//         </View>
//       </View>
//       <View>
//         {item.items.map((orderItem, index) => (
//           <View key={index} style={styles.orderItem}>
//             <Image style={styles.itemImage} source={{ uri: orderItem.image }} />
//             <View style={styles.detailsColumn}>
//               <Text style={styles.name1}>{orderItem.name}</Text>
//               <Text style={styles.quantity}>Qty: {orderItem.quantity} kgs</Text>
//               <Text style={styles.date}>Delivery Date:11/06/2024</Text>
//               <Text style={styles.date}>Delivery Time: 03:15 PM</Text>
//             </View>
//             <Text style={styles.priceText}>{orderItem.price}</Text>
//           </View>
//         ))}
//       </View>
//       <View style={styles.container4}>
//         <Text style={styles.delivery}>Delivery Details</Text>
//         <Text style={styles.status}>Order Placed</Text>
//       </View>
//       <View style={styles.hr}></View>
//       <View style={styles.container6}>
//         {/* Order arrived at, Delivered to */}
//         <View style={styles.cont6}>
//           <Image style={styles.img} source={require('./ph_timer.png')} />
//           <View style={styles.del}>
//             <Text style={styles.text1}>Order arrived at</Text>
//             <Text style={styles.text2}>{item.deliveryDate} at  03:15 PM</Text>
//           </View>
//         </View>
//         <View  style={styles.cont6}>
//           <Image style={styles.img} source={require('./system-uicons_location.png')} />
//           <View style={styles.del}>
//             <Text style={styles.text1}>Delivered to</Text>
//             <Text style={styles.text2}>Delivery Address: {item.address}</Text>
//           </View>
//         </View>
       
//       </View>
//       <View style={styles.mode} >
//           <Text style={styles.container7}>Mode of Payment</Text>
//         </View>
//         <View style={styles.react1}>
//         <Image style={styles.img} source={require('./iconoir_hand-cash.png')} />
//         <Text>Cash on Delivery</Text>

//         </View>
//         <View style={styles.react2}>
//           <Text style={styles.react3}>Bill details</Text>
//         </View>
//         <View style={styles.react4}>
//           <View style={styles.react5}>
//             <Text style={styles.react6}>Items and GST</Text>
//             <Text>Total Price</Text>
//           </View>
//           <View style={styles.react5}>
//             <Text style={styles.react6}>Handling Charges</Text>
//             <Text>Rs.30</Text>
//           </View>
//           <View style={styles.react5}>
//             <Text style={styles.react6}>Delivery Charges</Text>
//             <Text>Rs. 50</Text>
//           </View>
//           <View style={styles.react5}>
//             <Text style={styles.react6}>Total Price</Text>
//             <Text>Total Price</Text>
//           </View>
//         </View>
//         <View style={styles.react7}>
//           <View style={styles.react8}>
//             <Text style={styles.react9}>Cancel Order</Text>
//           </View>
//           <View style={styles.react8}>
//             <Text style={styles.react9}>Track Order</Text>
//           </View>
//         </View>
//     </ScrollView>
//   );
// };

// export default OrderDetailsScreen;

// const styles = StyleSheet.create({
//   container: {
//     width: 375,
//     height: 44,
//     marginTop: 27,
//     paddingRight: 3,
//     paddingLeft: 3,
//     justifyContent: 'space-between',
//     flexDirection: 'row'
//   },
//   react9:{
//     color:' #D89B00'
//   },
//   react8:{
//     width: 144,
// height:40,
// padding:"8px 10px 8px 10px",
// gap: 10,
// borderRadius: "8px 0px 0px 0px",
// borderWidth: "0.5px 0px 0px 0px",
//  color:'  #D89B00'

//   },
//   react7:{
//     width:333,
// height: 40,
// marginTop: 804,
// marginLeft: 21,
// gap: 20,
 

//   },
//   react6:{
     
// fontSize: 12,
// fontWeight: '500',
// lineHeight: 13.8,
// textAlign: 'center'

//   },
//   react5:{
//     width:343,
// height: 16,
 
// justifyContent: 'space-between'


//   },
//   react4:{
//     width: 343,
// height: 101,
// marginTop: 676,
// marginLeft: 16,
// gap: 7,
 

//   },
//   react2:{
//     width: 343,
// height: 18,
// marginTop: 646,
// marginLeft: 16,
// gap: 9,
 

//   },
//   react3:{
   
// fontSize: 16,
// fontWeight: '500',
// lineHeight: 18.4,
// textAlign: 'center'

//   },
//   react1:{
//     width: 343,
// height: 32,
// marginTop: 595,
// marginLeft: 16,
// gap: 0,
// justifyContent: 'space-between',
// flex:1,
//  flexDirection:'row'

//   },
//   cont11: {
//     width: 333,
//     height: 'auto',
//     top: 804,
//     left: 21,
//     gap: 20,
//     opacity: 0,
//   },
//   ord: {
//     width: 144,
//     height: 40,
//     padding: "8px 10px",
//     gap: 10,
//     borderRadius: "8px 0 0 0",
//     borderWidth: "0.5px 0 0 0",
//     borderColor:'#D89B00',  
//   },
//   container7:{
//     fontSize: 16,
//     fontWeight: '500',
//     lineHeight: 18.4,
//   },
//   gst:{
//     fontSize: 12,
//     fontWeight: '500',
//     lineHeight: 13.8,
//     textAlign: 'center'
//   },
//   billing1:{
//     width: 343,
//     height:16,
//     gap: 0,
//     justifyContent:'space-between',
//     flex:1,
//     flexDirection:'row',
//     paddingHorizontal: 16,
//     marginBottom: 8,
//   },
//   del:{
//     gap:2
//   },
//   cont6:{
//     width: 343,
//     height: 28,
//     gap: 2,
//     flexDirection:'row'
//   },
//   container9:{
//     width: 343,
//     height:18,
//     marginTop: 20,
//     marginLeft: 16,
//     gap: 9,
//     marginBottom: 20,
//   },
//   bill:{
//     fontSize: 16,
//     fontWeight: '500',
//     lineHeight: 18.4,
//     textAlign: 'center'
//   },
//   text: {
//     fontSize: 18,
//     lineHeight: 20.7,
//     textAlign: 'center',
//     marginTop: 15
//   },
//   cash:{
//     width: 122,
//     height: 24,
//     gap: 5 ,
//     flexDirection:'row'
//   },
//   billing:{
//     width:343,
//     height: 101,
//     marginTop: 646,
//     left: 16,
//     gap: 7
//   },
//   img:{
//     width:16,
//     height:16,
//   },
//   image1: {
//     width: 44,
//     height: 44,
//     paddingTop: 10,
//     paddingRight: 10,
//     paddingBottom: 15,
//     paddingLeft: 14,
//     opacity: 1,
//   },
//   cashd:{
//     fontSize: 14,
//     fontWeight: '400',
//     lineHeight: 13.8,
//     textAlign: 'center',
//     color:'#013062'
//   },
//   hr: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#0000000D'
//   },
//   text1:{
//     fontSize: 12,
//     fontWeight: '500',
//     lineHight: 13.8,
//     textAlign: 'center',
//     color:'#282A2C'
//   },
//   text2:{
//     fontSize: 9,
//     fontWeight: '400',
//     lineHeight: 10.35,
//     textAlign: 'left',
//   },
//   image2: {
//     width: 44,
//     height: 44,
//     opacity: 1,
//   },
//   container2: {
//     width: 343,
//     height: 25,
//     marginTop: 16,
//     marginBottom: 16,
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//   },
//   container6: {
//     width: 343,
//     height: 113,
//     marginTop: 16, // Adjusted marginTop instead of top
//     marginLeft: 16, // Adjusted marginLeft instead of left
//     gap: 8,
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
//   itemList: {
//     fontSize: 16,
//     fontWeight: '500',
//     lineHeight: 18.4,
//     textAlign: 'center',
//   },
//   help: {
//     fontSize: 12,
//     fontWeight: '400',
//     lineHeight: 13.8,
//     textAlign: 'center',
    

//     color: '#D89B00',
//     paddingTop: 5
//   },
//   image3: {
//     width: 18,
//     height: 18
//   },
//   container3: {
//     flexDirection: 'row',
//     borderWidth: 1,
//     borderColor: '#D89B00',
//     borderRadius: 8,
//     justifyContent: 'space-between'
//   },
//   orderItem: {
//     borderWidth: 1,
//     borderColor: 'lightgray',
//     padding: 10,
//     marginVertical: 5,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#EDF6FF'
//   },
//   itemImage: {
//     width: 65,
//     height: 65,
//     resizeMode: 'cover',
//     marginBottom: 5,
//     borderRadius: 4
//   },
//   detailsColumn: {
//     flex: 2,
//     flexDirection: 'column',
//     marginLeft: 0,
//     justifyContent: 'space-between',
//     paddingLeft: 10
//   },
//   name1: {
//     fontWeight: '500',
//     fontSize: 14,
//     lineHeight: 16.1,
//     color: '#000000',
//   },
//   container6: {
//     width: 343,
//     height: 113,
//     marginTop: 16, // Adjusted marginTop instead of top
//     marginLeft: 16, // Adjusted marginLeft instead of left
//     gap: 8,
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
  
//   quantity: {
//     fontSize: 10,
//     fontWeight: '400',
//     lineHeight: 11.5,
//     color: '#333333',
//   },
//   order: {
//     fontSize: 16,
//     fontWeight: '500',
//     lineHeight: 18.4,
//     textAlign: 'center',
//   },
//   date: {
//     fontSize: 10,
//     fontWeight: '500',
//     lineHeight: 11.5,
//     color: '#c4c4c4'
//   },
//   priceText: {
//     fontSize: 10,
//     fontWeight: '500',
//     lineHeight: 11.5,
//     color: '#000000',
//     width: 50,
//     height: 16,
//     marginBottom: 5,
//   },
//   container4: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     backgroundColor: '#fff'
//   },
//   delivery: {
//     fontSize: 16,
//     fontWeight: '500',
//     lineHeight: 18.4,
//     textAlign: 'center',
//   },
//   status: {
//     width: 100, // Increased width to fit the text
//     height: 25,
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//     borderTopLeftRadius: 8,
//     borderTopRightRadius: 6,
//     borderBottomRightRadius: 6,
//     borderBottomLeftRadius: 6,
//     borderWidth: 0.5,
//     borderColor: '#013062',
//     opacity: 1,
//     color: '#013062',
//     textAlign: 'center',
//     fontSize: 12, // Adjusted font size
//     lineHeight: 15,
//   },
//   container5: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     backgroundColor: '#fff',
//   },
//   cont: {
//     flexDirection: 'column',
//   },
//   placed:{
     
// fontSize: 10,
// fontWeight: '400',
// lineHeight: 11.5,
// textAlign: 'center',
// color:'#777777'

//   }
// });


// import React from 'react';
// import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
// import { useRoute } from '@react-navigation/native';

// const OrderDetailsScreen = () => {
//   const { params } = useRoute();
//   const { item } = params;

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Image style={styles.image1} source={require('./arrow_back.png')} />
//         <Text style={styles.text}>My Orders</Text>
//         <Image style={styles.image2} source={require('./mdi_cart-outline.png')} />
//       </View>
//       <View style={styles.container2}>
//         <Text style={styles.itemList}>Item List</Text>
//         <View style={styles.container3}>
//           <Image style={styles.image3} source={require('./carbon_help.png')} />
//           <Text style={styles.help}>Help</Text>
//         </View>
//       </View>
//       <View>
//         {item.items.map((orderItem, index) => (
//           <View key={index} style={styles.orderItem}>
//             <Image style={styles.itemImage} source={{ uri: orderItem.image }} />
//             <View style={styles.detailsColumn}>
//               <Text style={styles.name1}>{orderItem.name}</Text>
//               <Text style={styles.quantity}>Qty: {orderItem.quantity} kgs</Text>
//               <Text style={styles.date}>Delivery Date:11/06/2024</Text>
//               <Text style={styles.date}>Delivery Time: 03:15 PM</Text>
//             </View>
//             <Text style={styles.priceText}>{orderItem.price}</Text>
//           </View>
//         ))}
//       </View>
//       <View style={styles.container4}>
//         <Text style={styles.delivery}>Delivery Details</Text>
//         <Text style={styles.status}>Order Placed</Text>
//       </View>
//       <View style={styles.hr}></View>
//       <View style={styles.container6}>
//         <View style={styles.cont6}>
//           <Image style={styles.img} source={require('./ph_timer.png')} />
//           <View style={styles.del}>
//             <Text style={styles.text1}>Order arrived at</Text>
//             <Text style={styles.text2}>{item.deliveryDate} at  03:15 PM</Text>
//           </View>
//         </View>
//         <View style={styles.cont6}>
//           <Image style={styles.img} source={require('./system-uicons_location.png')} />
//           <View style={styles.del}>
//             <Text style={styles.text1}>Delivered to</Text>
//             <Text style={styles.text2}>Delivery Address: {item.address}</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.mode}>
//         <Text style={styles.container7}>Mode of Payment</Text>
//       </View>
//       <View style={styles.react1}>
//         <Image style={styles.img} source={require('./iconoir_hand-cash.png')} />
//         <Text>Cash on Delivery</Text>
//       </View>
//       <View style={styles.react2}>
//         <Text style={styles.react3}>Bill details</Text>
//       </View>
//       <View style={styles.react4}>
//         <View style={styles.react5}>
//           <Text style={styles.react6}>Items and GST</Text>
//           <Text>Total Price</Text>
//         </View>
//         <View style={styles.react5}>
//           <Text style={styles.react6}>Handling Charges</Text>
//           <Text>Rs.30</Text>
//         </View>
//         <View style={styles.react5}>
//           <Text style={styles.react6}>Delivery Charges</Text>
//           <Text>Rs. 50</Text>
//         </View>
//         <View style={styles.react5}>
//           <Text style={styles.react6}>Total Price</Text>
//           <Text>Total Price</Text>
//         </View>
//       </View>
//       <View style={styles.react7}>
//         <View style={styles.react8}>
//           <Text style={styles.react9}>Cancel Order</Text>
//         </View>
//         <View style={styles.react8}>
//           <Text style={styles.react9}>Track Order</Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const OrderDetailsScreen = () => {
  const { params } = useRoute();
  const { item } = params;

  // State to hold delivery address
  const [deliveryAddress, setDeliveryAddress] = useState(item.address);

  // Effect to update delivery address when it changes
  useEffect(() => {
    setDeliveryAddress(item.address);
  }, [item.address]);

  // Calculate total price including items, GST, handling, and delivery charges
  const totalPrice = () => {
    let total = item.items.reduce((acc, curr) => acc + (parseInt(curr.price.replace('Rs.', '')) * curr.quantity), 0);

    // Add GST, handling charges, and delivery charges
    total += 80 + 30 + 50;
    return total;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image1} source={require('./arrow_back.png')} />
        <Text style={styles.text}>My Orders</Text>
        <Image style={styles.image2} source={require('./mdi_cart-outline.png')} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.itemList}>Item List</Text>
        <View style={styles.container3}>
          <Image style={styles.image3} source={require('./carbon_help.png')} />
          <Text style={styles.help}>Help</Text>
        </View>
      </View>
      <View>
        {item.items.map((orderItem, index) => (
          <View key={index} style={styles.orderItem}>
            <Image style={styles.itemImage} source={{ uri: orderItem.image }} />
            <View style={styles.detailsColumn}>
              <Text style={styles.name1}>{orderItem.name}</Text>
              <Text style={styles.quantity}>Qty: {orderItem.quantity} kgs</Text>
              <Text style={styles.date}>Delivery Date:  11/06/2024</Text>
              <Text style={styles.date}>Delivery Time: 03:15 PM</Text>
            </View>
            <Text style={styles.priceText}>Rs.{(parseInt(orderItem.price.replace('Rs.', '')) * orderItem.quantity) + 80}</Text>

          </View>
        ))}
      </View>
      <View style={styles.container4}>
        <Text style={styles.delivery}>Delivery Details</Text>
        <Text style={styles.status}>Order Placed</Text>
      </View>
      <View style={styles.hr}></View>
      <View style={styles.container6}>
        <View style={styles.cont6}>
          <Image style={styles.img} source={require('./ph_timer.png')} />
          <View style={styles.del}>
            <Text style={styles.text1}>Order arrived at</Text>
            <Text style={styles.text2}>{item.deliveryDate} at 03:15 PM</Text>
          </View>
        </View>
        <View style={styles.cont6}>
          <Image style={styles.img} source={require('./system-uicons_location.png')} />
          <View style={styles.del}>
            <Text style={styles.text1}>Delivered to</Text>
            <Text style={styles.text2}>Delivery Address: chengal,armoor,nizamabad</Text>
          </View>
        </View>
      </View>
      <View style={styles.mode}>
        <Text style={styles.container7}>Mode of Payment</Text>
      </View>
      <View style={styles.react1}>
        <Image style={styles.img} source={require('./iconoir_hand-cash.png')} />
        <Text>Cash on Delivery</Text>
      </View>
      <View style={styles.react2}>
        <Text style={styles.react3}>Bill details</Text>
      </View>
      <View style={styles.react4}>
        <View style={styles.react5}>
          <Text style={styles.react6}>Items Total</Text>
          <Text>Rs. {item.items.reduce((acc, curr) => acc + (parseInt(curr.price.replace('Rs.', '')) * curr.quantity), 0)}</Text>

        </View>
        <View style={styles.react5}>
          <Text style={styles.react6}>Handling Charges</Text>
          <Text>Rs. 30</Text>
        </View>
        <View style={styles.react5}>
          <Text style={styles.react6}>Delivery Charges</Text>
          <Text>Rs. 50</Text>
        </View>
        <View style={styles.react5}>
          <Text style={styles.react6}>Total Price</Text>
          <Text>Rs. {totalPrice()-80}</Text>
        </View>
      </View>
      <View style={styles.react7}>
        <View style={styles.react8}>
          <Text style={styles.react9}>Cancel Order</Text>
        </View>
        <View style={styles.react8}>
          <Text style={styles.react9}>Track Order</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 44,
    marginTop: 27,
    paddingRight: 3,
    paddingLeft: 3,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  react9:{
    color:'#D89B00'
  },
  react8:{
    width: 144,
    height: 40,
    padding: 8,
    gap: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#D89B00',
    color:'#D89B00'

  },
  react7:{
    width: '100%',
    height: 40,
    marginTop: 20,
    gap: 20,
    flexDirection:'row'
  },
  react6:{
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
    textAlign: 'center'

  },
  react5:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 8
  },
  react4:{
    width: '100%',
    height: 101,
    marginTop: 20,
    paddingHorizontal: 16,
    gap: 7
  },
  react2:{
    width: '100%',
    height: 18,
    marginTop: 20,
    paddingHorizontal: 16,
    gap: 9,
  },
  react3:{
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18.4,
    textAlign: 'center'
  },
  react1:{
    width: '100%',
    height: 32,
    marginTop: 20,
    paddingHorizontal: 16,
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  cont6:{
    flexDirection:'row',
    paddingHorizontal: 16,
    gap: 2,
    paddingTop:30
  },
  container7:{
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18.4,
    paddingHorizontal: 16
  },
  gst:{
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 13.8,
    textAlign: 'center'
  },
  billing1:{
    justifyContent:'space-between',
    flexDirection:'row',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  del:{
    flexDirection: 'column',
    gap: 2
  },
  text1:{
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 13.8,
    textAlign: 'center',
    color:'#282A2C'
  },
  text2:{
    fontSize: 9,
    fontWeight: '400',
    lineHeight: 10.35,
    textAlign: 'left',
  },
  image1: {
    width: 44,
    height: 44,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 15,
    paddingLeft: 14,
    opacity: 1,
  },
  cashd:{
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 13.8,
    textAlign: 'center',
    color:'#013062'
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: '#0000000D'
  },
  text1:{
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 13.8,
    textAlign: 'center',
    color:'#282A2C'
  },
  text2:{
    fontSize: 9,
    fontWeight: '400',
    lineHeight: 10.35,
    textAlign: 'left',
  },
  image2: {
    width: 44,
    height: 44,
    opacity: 1,
  },
  container2: {
    width: '100%',
    height: 25,
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft:20
  },
  container6: {
    width: '100%',
    height: 113,
    marginTop: 16,
    paddingHorizontal: 16,
    gap: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemList: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18.4,
    textAlign: 'center',
  },
  help: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 13.8,
    textAlign: 'center',
    color: '#D89B00',
    paddingTop: 5
  },
  image3: {
    width: 18,
    height: 18
  },
  container3: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D89B00',
    borderRadius: 8,
    justifyContent: 'space-between',
    paddingRight:20
  },
  orderItem: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EDF6FF'
  },
  itemImage: {
    width: 65,
    height: 65,
    resizeMode: 'cover',
    marginBottom: 5,
    borderRadius: 4
  },
  detailsColumn: {
    flex: 2,
    flexDirection: 'column',
    marginLeft: 0,
    justifyContent: 'space-between',
    paddingLeft: 10
  },
  name1: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16.1,
    color: '#000000',
  },
  quantity: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 11.5,
    color: '#333333',
  },
  order: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18.4,
    textAlign: 'center',
  },
  date: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 11.5,
    color: '#c4c4c4'
  },
  priceText: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 11.5,
    color: '#000000',
    width: 50,
    height: 16,
    marginBottom: 5,
  },
  container4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff'
  },
  mode:{
    paddingTop:20
  },
  delivery: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18.4,
    textAlign: 'center',
  },
  status: {
    width: 100,
    height: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#013062',
    opacity: 1,
    color: '#013062',
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 15,
  },
});

export default OrderDetailsScreen;




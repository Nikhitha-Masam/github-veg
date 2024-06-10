import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i => {
          if (i.id === item.id) {
            return { ...i, quantity: i.quantity + 1 }; 
          }
          return i;
        });
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  


  return (
    <CartContext.Provider value={{ cartItems, setCartItems,addToCart, removeFromCart, orderHistory, setOrderHistory, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

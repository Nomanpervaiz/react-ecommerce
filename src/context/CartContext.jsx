import { createContext, useEffect, useState } from "react";

export const contextCart = createContext();

function ContextCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    try {
      const items = localStorage.getItem("cartItems");
      if (items) {
        setCartItems(JSON.parse(items));
      }
    } catch (error) {
      console.error("Error reading cart items from localStorage", error);
      setCartItems([]); // Fallback to an empty array in case of an error
    }
  }, []);

  // Update localStorage when cartItems changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems"); // Clean up localStorage if the cart is empty
    }
  }, [cartItems]);


  // Add item to cart or increment its quantity
  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((cartItem) => cartItem.id === item.id);
      if (existingItemIndex !== -1) {
        // If item exists, increment the quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return updatedItems;
      } else {
        // If item doesn't exist, add new item
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart by id
  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Check if an item is already in the cart
  const isItemAdded = (id) => {
    return cartItems.find((item) => item.id === id) || null;
  };


  return (
    <contextCart.Provider value={{
      cartItems, addItemToCart, removeItemFromCart,
      isItemAdded
    }}>
      {children}
    </contextCart.Provider>
  );
}

export default ContextCartProvider;

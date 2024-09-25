import { message } from "antd";
import { createContext, useContext, useEffect, useState } from "react";
import { UserDetailContext } from "./UserContext";

export const contextCart = createContext();

function ContextCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
const {userDetail} =useContext(UserDetailContext)

  useEffect(() => {
    try {
      const items = localStorage.getItem("cartItems");
      if (items) {
        setCartItems(JSON.parse(items));
      }
    } catch (error) {
      message.error(error.message);
      setCartItems([]);
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cartItems");
    }
  }, [cartItems]);


  const addItemToCart = (item) => {
    if (userDetail?.uid) {
      setCartItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex((cartItem) => cartItem.id === item.id);
        if (existingItemIndex !== -1) {
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + 1,
          }
          return updatedItems;
        } else {
          return [...prevItems, { ...item, quantity: 1 }];
        }
      });
    }else{
      message.warning("You need to Registerd or Login first")
    }
  };


  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  }


  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const isItemAdded = (id) => {
    const item = cartItems.find((item) => item.id == id);
    return item ? item : null;
  }



  return (
    <contextCart.Provider value={{
      cartItems, addItemToCart, removeItemFromCart,
      isItemAdded, updateQuantity
    }}>
      {children}
    </contextCart.Provider>
  );
}

export default ContextCartProvider;

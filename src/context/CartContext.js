import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [number, setNumber] = useState(1);

  const quantityCount = () => {
    return cart.reduce((acc, item) => (acc += item.quantity), 0);
  };

  const addToCart = (item) => {
    if (isInCart(item.id)) {
      setNumber(item.quantity+=number)
    } else {
      item.quantity = number
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.find((item) => id === item.id);
  };

  const totalProductPrice = (item) => {
    return item.quantity*item.price
  }

  const totalCartPrice = (cart) => {
    return cart.map(p => p.price * p.quantity).reduce((a,b) => a + b)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        number,
        setNumber, 
        addToCart,
        removeFromCart,
        quantityCount,
        clearCart,
        totalProductPrice,
        totalCartPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

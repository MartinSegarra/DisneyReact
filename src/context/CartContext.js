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
      const newCart = [...cart];
      newCart.forEach((p) => {
        p.id === item.id && (p.quantity = p.quantity + number);
      });
      setCart(newCart);
    } else {
      item.quantity = number;
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
    return cart.some((item) => id === item.id);
  };

  const totalProductPrice = (item) => {
    return item.quantity * item.price;
  };

  const totalCartPrice = (cart) => {
    return cart.map((p) => totalProductPrice(p)).reduce((a, b) => a + b);
  };

  function onPlus(item) {
    if (number < item.stock) {
      setNumber(number + 1);
    } else {
      setNumber(item.stock);
    }
  }

  function onSubstract() {
    if (number > 1) {
      setNumber(number - 1);
    } else {
      setNumber(1);
    }
  }

  function addQuantity(item) {
    if (item.quantity < item.stock) {
      const newCart = [...cart];
      newCart.forEach((p) => {
        p.id === item.id && (p.quantity = p.quantity + 1);
      });
      setCart(newCart);
    }
  }

  function removeQuantity(item) {
    if (item.quantity > 1) {
      const newCart = [...cart];
      newCart.forEach((p) => {
        p.id === item.id && (p.quantity = p.quantity - 1);
      });
      setCart(newCart);
    }
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
        totalCartPrice,
        addQuantity,
        removeQuantity,
        onPlus,
        onSubstract,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

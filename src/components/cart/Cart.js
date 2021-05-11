import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  console.log(cart);

  return (
    <div className="CartListContainer">
      <h2>Tu carrito</h2>
      <div className="Cart">
        <div className="cartList">
          {cart.length > 0 ? (
            cart.map((props) => (
              <div className="cartDetail">
                <h2>{props.title}</h2>
                <h2>{props.price}$</h2>
                <h2>{props.description}</h2>
                <img
                  src={
                    props.image
                      ? require(`../../img/products/${props.image}`).default
                      : ""
                  }
                ></img>
                <p>Cantidad en el carrito: {props.quantity}</p>
                <h2>Precio total: {props.quantity * props.price}$</h2>
                <button onClick={() => removeFromCart(props.id)}>
                  Quitar del carrito
                </button>
              </div>
            ))
          ) : (
            <p>No tenes productos en el carrito</p>
          )}
        </div>
        <div className="cartList">
          {cart.length > 0 ? (
            <div className="clearCartButton">
              <button onClick={clearCart}>Limpiar carrito</button>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartCount } from '../cartcount/CartCount'

export const Cart = () => {
  const { cart, removeFromCart, clearCart, totalProductPrice, totalCartPrice} =
    useContext(CartContext);


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
                <img className='productImage' src={props.image} alt={props.title}></img>
                <CartCount props={props}/>
                <p>Stock disponible: {props.stock}</p>
                <h2>Precio total: {totalProductPrice(props)}$</h2>
                <button onClick={() => removeFromCart(props.id)}>
                  Quitar del carrito
                </button>
              </div>
            ))
          ) : (
            <div className="noProducts">
              <p>No tenes productos en el carrito</p>
              <button className="backToHome">
                <Link to="/">Volver al catálogo</Link>
              </button>
            </div>
          )}
        </div>
        <div className="cartList">
          {cart.length > 0 ? (
            <div className="clearCartButton">
              <h2 className="totalPrice">
                Tu precio a pagar es {totalCartPrice(cart)}$
              </h2>
              <button onClick={clearCart}>Limpiar carrito</button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

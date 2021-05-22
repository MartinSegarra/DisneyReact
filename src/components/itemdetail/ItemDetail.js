import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../itemcount/ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

export const ItemDetail = ({ props }) => {
  const {number, setNumber, addToCart, onPlus, onSubstract} = useContext(CartContext);
  const [mostrarBoton, setMostrarBoton] = useState(true);


  function onAdd() {
    addToCart(props);
    setMostrarBoton(false);
  }

  useEffect (() => {setNumber(1) }, [])


  return (
    <div className="ItemDetail">
      <h2>{props.title}</h2>
      <h2>{props.price}$</h2>
      <h2>{props.description}</h2>
      <img
        src={
          props.image
        }
        alt={props.title}
      ></img>
      <div>
        {mostrarBoton ? (
          <ItemCount
            stock={props.stock}
            initial={1}
            onPlus={() => onPlus(props)}
            onSubstract={onSubstract}
            number={number}
            onAdd={onAdd}
          />
        ) : (
          <button className="finalizePurchase">
            <Link to="/cart/">Ir al carrito</Link>
          </button>
        )}
      </div>
    </div>
  );
};

import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../itemcount/ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

export const ItemDetail = ({ props }) => {
  const {number, setNumber, addToCart} = useContext(CartContext);
  const [mostrarBoton, setMostrarBoton] = useState(true);


  function onPlus() {
    if (number < props.stock) {
      setNumber(number + 1);
    } else {
      setNumber(props.stock);
    }
  }

  function onSubstract() {
    if (number > 1) {
      setNumber(number - 1);
    } else {
      setNumber(1);
    }
  }

  function onAdd() {
    addToCart(props);
    setMostrarBoton(false);
  }

  useEffect (() => {setNumber (1) }, [])


  return (
    <div className="ItemDetail">
      <h2>{props.title}</h2>
      <h2>{props.price}$</h2>
      <h2>{props.description}</h2>
      <img
        src={
          props.image
        }
      ></img>
      <div>
        {mostrarBoton ? (
          <ItemCount
            stock={props.stock}
            initial={1}
            onPlus={onPlus}
            onSubstract={onSubstract}
            number={number}
            onAdd={onAdd}
          />
        ) : (
          <button className="finalizePurchase">
            <Link to="/cart/">Finalizar compra </Link>
          </button>
        )}
      </div>
    </div>
  );
};

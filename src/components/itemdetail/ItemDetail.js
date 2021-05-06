import "./ItemDetail.css";
import { ItemCount } from "../itemcount/ItemCount";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from 'react-router-dom'

export const ItemDetail = ({ props }) => {
  const [number, setNumber] = useState(1);
  const [mostrarBoton, setMostrarBoton] = useState(true);

  function onAdd() {
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

  function finalizePurchase() {
    setMostrarBoton(false);
  }

  return (
    <div className="ItemDetail">
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
      <div>
       {
        mostrarBoton ? 
           (<ItemCount
            stock={props.stock}
            initial={1}
            onAdd={onAdd}
            onSubstract={onSubstract}
            number={number}
            finalizePurchase={finalizePurchase}
          />) 
           : (<button className="finalizePurchase"><Link to='/cart/'>Finalizar compra </Link></button>)
        }
        </div>
      
    </div>
  );
};

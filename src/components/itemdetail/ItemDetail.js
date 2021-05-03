import "./ItemDetail.css";
import { ItemCount } from "../itemcount/ItemCount";
import {useParams} from "react-router-dom"

export const ItemDetail = ({props}) => {

  console.log(`../../img/products/${props.image}`)


  return (
    <div className="ItemDetail">
      <h2>{props.title}</h2>
      <h2>{props.price}$</h2>
      <h2>{props.description}</h2>
      <img src={props.image ? require(`../../img/products/${props.image}`).default : ""}></img>
      <ItemCount stock={props.stock} initial={1} />
      <button>Agregar al carrito</button>
    </div>
  );
};

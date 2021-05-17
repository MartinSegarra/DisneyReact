import "./Item.css";
import { Link } from "react-router-dom";

export const Item = (props) => {

 
  return (
    <div className="Item">
      <h2>{props.product.title}</h2>
      <h3>{props.product.price}$</h3>
      <img className="productImage"
        src={props.product.image}
      ></img>
      <h4>{props.product.description}</h4>
      <button>
        <Link to={`/item/${props.product.id}`}>Ver detalle</Link>
      </button>
    </div>
  );
};


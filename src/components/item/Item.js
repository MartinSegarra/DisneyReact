import "./Item.css";
import { ItemCount } from "../itemcount/ItemCount";

export const Item = (props) => {
  

  return (
    <div className="Item">
      <h2>{props.peliculas.title}</h2>
      <h3>{props.peliculas.price}$</h3>
      <img src={require(`../../img/movies/${props.peliculas.image}`).default}></img>
      <h4>{props.peliculas.description}</h4>
      <ItemCount stock={props.peliculas.stock} initial={1} />
      
    </div>
  );
};

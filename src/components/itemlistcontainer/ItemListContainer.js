import "./ItemListContainer.css";
import { Product } from "../product/Product";

export const ItemListContainer = (props) => {
  return (
    <div className="ItemListContainer">
      <Product greeting={props.greeting} />
    </div>
  );
};

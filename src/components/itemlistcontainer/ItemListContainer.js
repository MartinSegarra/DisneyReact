import "./ItemListContainer.css";
import { Product } from "../product/Product";
import { ItemCount } from "../itemcount/ItemCount";

export const ItemListContainer = (props) => {
  return (
    <div className="ItemListContainer">
      <Product greeting={props.greeting} />
      <ItemCount stock={5} initial={1} />
    </div>
  );
};

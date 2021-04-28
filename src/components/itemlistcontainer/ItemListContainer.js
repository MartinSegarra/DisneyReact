import "./ItemListContainer.css";
import { Product } from "../product/Product";

import { ItemList } from "../itemlist/ItemList";

export const ItemListContainer = (props) => {
  
  return (
    <div className="ItemListContainer">
      <h1>{props.greeting}</h1>
      <ItemList/>
    </div>
  );
};

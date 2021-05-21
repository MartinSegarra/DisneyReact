import "./ItemListContainer.css";

import { ItemList } from "../itemlist/ItemList";

export const ItemListContainer = (props) => {
  
  return (
    <div className="ItemListContainer">
      <h1>Bienvenidos a Disney Store</h1>
      <ItemList/>
    </div>
  );
};

import "./ItemListContainer.css";

import { ItemList } from "../itemlist/ItemList";

export const ItemListContainer = () => {

 
  return (
    <div className="ItemListContainer">
      <h1 className='welcome'>Bienvenidos a Disney Store</h1>
      <ItemList/>
    </div>
  );
};

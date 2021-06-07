import "./Category.css";

import { ItemList } from "../../components/itemlist/ItemList";
import { useParams } from "react-router-dom";

export const Category = () => {
  
const {categoryId}= useParams() 

  return (
    <div className="ItemListContainer">
      <h1 className='category'> {categoryId}</h1>
      <ItemList/>
    </div>
  );
};

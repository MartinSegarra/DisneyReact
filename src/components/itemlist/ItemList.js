import "./ItemList.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../item/Item";
import { getFirestore } from "../../firebase";

export const ItemList = () => {
  let { categoryId } = useParams();

  const [items, setItems] = useState([]);
  const [categoryExists, setCategoryExists] = useState(false)

  useEffect( () => {
    const db = getFirestore();
    const ItemCollection = db.collection("items");
     ItemCollection.get()
      .then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCategoryExists(true)

      const filteredData = data.filter(
        (product) => product.categoryId === categoryId
      );

      {(!categoryId) ? (setItems(data)) : (setItems(filteredData))}})}, [categoryId])

  return (
    <div className="ItemList">
      <div className="movieList">
      {categoryExists ? ( items.length>0 ? (
          items.map((props) => <Item product={props} />)
          
        ) : (
          <p>Lo sentimos, no tenemos productos de esa categoría</p>
        )) : (<> </>)}

       
      </div>
    </div>
  );
};

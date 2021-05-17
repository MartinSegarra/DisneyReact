import "./ItemDetailContainer.css";
import { useState } from "react";
import { ItemDetail } from "../itemdetail/ItemDetail";
import { useParams } from "react-router-dom";
import { ProductList } from "../productlist/ProductList";
import { useEffect, useContext } from "react";
import { Item } from "../item/Item";
import { getFirestore } from "../../firebase";
import {CartContext} from '../../context/CartContext'

export const ItemDetailContainer = () => {
  const {productId} = useParams();
  const [item, setItem] = useState({});
  const [itemExists, setItemExists] = useState(false)
  const {number} = useContext(CartContext)

 
  useEffect(() => {

    const db = getFirestore();
    const ItemCollection = db.collection('items')
    const product = ItemCollection.doc(productId)
    


    product.get().then((doc) => {

      

      
      setItem({quantity:number, id:doc.id, ...doc.data()})
      
     
      setItemExists(true)
    
      
    })}, [productId])

    

    /* const myItem = ProductList.find((product) => product.id === productId.id);
    setItem(myItem);
  }, [productId]); */

  return (

    <div className="ItemDetailContainer">
      {itemExists ? (
      <ItemDetail props={item} />) : (<p>Estamos trayendo tu producto</p>)}

    </div>
  );
};

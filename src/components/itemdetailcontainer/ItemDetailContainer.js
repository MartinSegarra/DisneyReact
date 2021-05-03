import "./ItemDetailContainer.css";
import { useState } from "react";
import { ItemDetail } from "../itemdetail/ItemDetail";
import { useParams } from "react-router-dom";
import { ProductList } from "../productlist/ProductList";
import { useEffect } from "react";

export const ItemDetailContainer = () => {
  const productId = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const myItem = ProductList.find((product) => product.id === productId.id);
    setItem(myItem);
  }, [productId]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail props={item} />
    </div>
  );
};

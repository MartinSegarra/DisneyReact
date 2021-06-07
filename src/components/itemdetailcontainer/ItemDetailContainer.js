import "./ItemDetailContainer.css";
import { useState } from "react";
import { ItemDetail } from "../itemdetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { getFirestore } from "../../firebase";
import { CartContext } from "../../context/CartContext";
import Lottie from "react-lottie";
import Mickey from "../../animations/animation.json";


export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [item, setItem] = useState({});
  const [itemExists, setItemExists] = useState(false);
  const [itemLoading, setItemLoading] = useState(true);
  const { number } = useContext(CartContext);
  
  const animation = {
    loop: true,
    autoplay: true,
    animationData: Mickey,
  };

  useEffect(() => {
    const db = getFirestore();
    const ItemCollection = db.collection("items");
    const product = ItemCollection.doc(productId);

    product.get().then((doc) => {
      if (doc.exists) {
        setItem({ quantity: number, id: doc.id, ...doc.data() });

        setItemExists(true);
      } else {
        setItemExists(false);
        setItemLoading(false);
      }
    });
  }, [productId]);

  return (
    <div className="ItemDetailContainer">
      {itemLoading ? (
        <>
          {itemExists ? (
            <ItemDetail props={item} />
          ) : (
            <Lottie options={animation} height={200} width={200} isClickToPauseDisabled={true} />
          )}
        </>
      ) : (
        <p className="noProduct"> Lo sentimos. Ese producto no existe.</p>
      )}
    </div>
  );
};

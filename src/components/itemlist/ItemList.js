import "./ItemList.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../item/Item";
import { getFirestore } from "../../firebase";
import Lottie from "react-lottie";
import Mickey from "../../animations/animation.json";

export const ItemList = () => {
  let { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [categoryExists, setCategoryExists] = useState(false);

  const animation = {
    loop: true,
    autoplay: true,
    animationData: Mickey,
  };

  useEffect(() => {
    const db = getFirestore();
    const ItemCollection = db.collection("items");
    ItemCollection.get().then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCategoryExists(true);

      const filteredData = data.filter(
        (product) => product.categoryId === categoryId
      );

      {
        !categoryId ? setItems(data) : setItems(filteredData);
      }
    });
  }, [categoryId]);

  return (
    <div className="container">
      <div className="row">
        {categoryExists ? (
          items.length > 0 ? (
            items.map((props, i) => <Item product={props} key={i} />)
          ) : (
            <h4 className="noProducts">
              Lo sentimos, no tenemos productos de esa categoría
            </h4>
          )
        ) : (
          <>
            <Lottie options={animation} height={200} width={200} isClickToPauseDisabled={true}/>
          </>
        )}
      </div>
    </div>
  );
};

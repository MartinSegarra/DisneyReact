import "./ItemList.css";
import { useState } from "react";
import { Item } from "../item/Item";
import { ProductList } from "../productlist/ProductList";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const ItemList = () => {
  let { categoryId } = useParams();

  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    if (!categoryId) {
      setListaProductos(ProductList);
    } else {
      let productosFiltrados = ProductList.filter(
        (product) => product.categoryId === categoryId
      );
      setListaProductos(productosFiltrados);
    }
  }, [categoryId]);

  return (
    <div className="ItemList">
      <div className="movieList">
        {listaProductos.length > 0 ? (
          listaProductos.map((props) => (
            <Item product={props} />
          ))
        ) : (
          <p>Estamos buscando tus productos</p>
        )}
      </div>
    </div>
  );
};

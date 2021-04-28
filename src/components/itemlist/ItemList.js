import "./ItemList.css";
import { useState } from "react";
import { Item } from "../item/Item";

export const ItemList = () => {
  const peliculas = [
    {
      id: 1,
      title: "The Little Mermaid - 4K Blu-Ray",
      description: "Blu-Ray en formato 4K",
      price: 2500,
      image: "little-mermaid.png",
      stock: 3,
    },
    {
      id: 2,
      title: "Beauty and the Beast - 4K Blu-Ray",
      description: "Blu-Ray en formato 4K",
      price: 2700,
      image: "beauty-beast.png",
      stock: 4
    },
    {
      id: 3,
      title: "The Lion King - 4K Blu-Ray",
      description: "Blu-Ray en formato 4K",
      price: 2800,
      image: "lion-king.png",
      stock: 5,
    },
  ];

  const [listaPeliculas, setListaPeliculas] = useState([]);

  const catalogoPeliculas = async () => {
    try {
      setTimeout(() => {
        setListaPeliculas(peliculas);
      }, 2000)
    } catch {
      setListaPeliculas("Ha ocurrido un error. Inténtalo más adelante");
    }
  };

  return (
    <div className="ItemList">
      <button className="showMovies" onClick={catalogoPeliculas}>Mostrar películas</button>
      <div>
        {listaPeliculas.length > 0 ? (
          listaPeliculas.map((props) => <Item peliculas={props} />)
        ) : (
          <p></p>
        )}
        
      </div>
    </div>
  );
};

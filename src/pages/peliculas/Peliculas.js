import React from "react";
import './Peliculas.css'
import { ItemListContainer} from '../../components/itemlistcontainer/ItemListContainer'
import {useEffect} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {ItemDetail} from '../../components/itemdetail/ItemDetail'
import {ProductList} from '../../components/productlist/ProductList'

export const Peliculas = () => {

  const {categoryID} = useParams()

  console.log(categoryID)

  

  return (
    <div className="Peliculas">
     <p>Películas</p>
     <div>
     <ItemListContainer />
     </div>
    </div>
  );
}

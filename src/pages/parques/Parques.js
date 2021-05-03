import React from "react";
import './Parques.css'
import { ItemListContainer} from '../../components/itemlistcontainer/ItemListContainer'
import { useParams} from 'react-router-dom'

export const Parques = () => {

  

  return (
    <div className="Parques">
     <p>Peliculas</p>
     <ItemListContainer />
    </div>
  );
}

import "./CartCount.css";
import {useContext} from 'react'
import { CartContext } from "../../context/CartContext";


export const CartCount = ({ props }) => {
  
const {addQuantity, removeQuantity} =  useContext(CartContext)

function addOne() {
  addQuantity(props);
}


function removeOne() {
  removeQuantity(props);
}


  return (
    <div className='CartCount'>
                <button className="AddSubstractButtons" onClick={removeOne}>-</button>
                <p className='quantityNumber'>Cantidad en el carrito: {props.quantity}</p>
                <button className="AddSubstractButtons" onClick={addOne} >+</button>
                </div>
  );
};

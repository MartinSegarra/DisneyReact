import "./CartCount.css";
import {useContext} from 'react'
import { CartContext } from "../../context/CartContext";


export const CartCount = ({ props }) => {
  
const {addQuantity, removeQuantity} =  useContext(CartContext)


  return (
    <div className='CartCount'>
                <button className="AddSubstractButtons" onClick={() => removeQuantity(props)}>-</button>
                <p className='quantityNumber'>Cantidad en el carrito: {props.quantity}</p>
                <button className="AddSubstractButtons" onClick={() => addQuantity(props)} >+</button>
                </div>
  );
};

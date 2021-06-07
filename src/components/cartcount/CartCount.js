import "./CartCount.css";
import {useContext} from 'react'
import { CartContext } from "../../context/CartContext";


export const CartCount = ({ props }) => {
  
const {addQuantity, removeQuantity} =  useContext(CartContext)


  return (
    <td data-th="Quantity" className="CartCount">
                <button className="form-control" onClick={() => removeQuantity(props.props)}>-</button>
                <p className='quantityNumber'>{props.props.quantity}</p>
                <button className="form-control" onClick={() => addQuantity(props.props)} >+</button>
                </td>
  );
};


/*
<td data-th="Quantity">
        <input
          type="number"
          className="form-control form-control-lg text-center"
          defaultValue={1}
          minValue= {}
        />
      */
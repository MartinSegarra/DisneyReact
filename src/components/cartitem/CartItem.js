import "./CartItem.css";
import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartCount } from '../../components/cartcount/CartCount'
export const CartItem = (props) => {
  const { removeFromCart, totalProductPrice } = useContext(CartContext);

  return (
    <tr>
      <td data-th="Product">
        <div className="row">
          <div className="col-md-3 text-left">
            <img
              src={props.props.image}
              alt={props.props.title}
              className="img-fluid d-none d-md-block rounded mb-2 shadow "
            />
          </div>
          <div className="col-md-9 text-left mt-sm-2">
            <h4>{props.props.title}</h4>
            <p className="font-weight-light">{props.props.description}</p>
            <p className="font-weight-light">Stock disponible: {props.props.stock}</p>
          </div>
        </div>
      </td>
      <td data-th="Price">{totalProductPrice(props.props)}$</td>
      <CartCount props={props}/>
      <td className="actions" data-th>
        <div className="text-right">
          <button
            onClick={() => removeFromCart(props.props.id)}
            className="btn btn-white border-secondary bg-white btn-md mb-2"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </td>
    </tr>
  );
};

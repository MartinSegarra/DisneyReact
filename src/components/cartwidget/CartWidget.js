import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

export const CartWidget = () => {
  const { cart, quantityCount } = useContext(CartContext);

  return (
    <>
      {cart.length > 0 ? (
        <>
          <NavLink to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />({quantityCount()})
          </NavLink>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

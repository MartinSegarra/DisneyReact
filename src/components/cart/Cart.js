import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "../cartitem/CartItem";
import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const Cart = () => {
  const { cart, totalCartPrice, clearCart } = useContext(CartContext);

  return (
    <>
      {cart.length > 0 ? (
        <>
          <section className="pt-5 pb-5">
            <div className="container">
              <div className="row w-100">
                <div className="col-lg-12 col-md-12 col-12">
                  <p className="display-5 mb-2 text-center yourCart2">
                    Tu carrito
                  </p>
                  <table
                    id="shoppingCart"
                    className="table table-condensed table-responsive"
                  >
                    <thead>
                      <tr>
                        <th style={{ width: "60%" }}>Producto</th>
                        <th style={{ width: "12%" }}>Precio</th>
                        <th style={{ width: "10%" }}>Cantidad</th>
                        <th style={{ width: "16%" }} />
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((props) => (
                        <CartItem props={props} />
                      ))}
                    </tbody>
                  </table>
                  <div className="float-right text-right">
                  <div onClick={clearCart} className="btn btn-primary mb-4 btn-sm clearCart ">
                    Limpiar carrito
                </div>
                    <h4 className="subtotal">Subtotal:</h4>
                    <h1>{totalCartPrice(cart)}$</h1>
                    
                  </div>
                
                </div>
                
              </div>
              <div className="row mt-4 d-flex align-items-center">
                <div className="col-sm-6 order-md-2 text-right">
                  <Link
                    to="/purchase"
                    className="btn btn-primary mb-4 btn-lg pl-5 pr-5"
                  >
                    Finalizar compra
                  </Link>
                
                </div>
                <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="fas fa-arrow-left mr-2"
                  />
                  <Link to="/">Continuar comprando</Link>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="noProducts">
          <p className="yourCart">Tu carrito</p>
          <p className="noProducts">No tenés productos en el carrito</p>
          <button className="noProductsButton btn btn-light btn-md mr-1 mb-2 plus">
            <Link to="/">Volver al catálogo</Link>
          </button>
        </div>
      )}
    </>
  );
};

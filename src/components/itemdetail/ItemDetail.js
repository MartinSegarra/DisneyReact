import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../itemcount/ItemCount";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";

export const ItemDetail = ({ props }) => {
  const { number, setNumber, addToCart, onPlus, onSubstract, cart } =
    useContext(CartContext);


  function onAdd() {
    addToCart(props);
    
  }

  function itemInCart(id) {
    if (cart.some((item) => id === item.id)) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    setNumber(1);
  }, []);

  return (
    <section className="mb-5 ItemDetail">
      <div className="row ItemDetail">
        <div className="col-md-6 mb-4 mb-md-0">
          <div id="mdb-lightbox-ui" />
          <div className="mdb-lightbox">
            <div className="row product-gallery mx-1">
              <div className="col-12 mb-0">
                <figure className="view overlay rounded z-depth-1 main-img">
                  <img
                    src={props.image}
                    alt={props.title}
                    className="img-fluid z-depth-1 productImage"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h2 className='productTitle'>{props.title}</h2>
          <h3 className="productPrice ">
            <span className="mr-1">
              <strong>{props.price}$</strong>
            </span>
          </h3>
          <h4 className="pt-1 productDescription">{props.description}</h4>
          <hr />
          {itemInCart(props.id) ? (
            <div className="finalizePurchase">
              <p className="finalizePurchase">
                El producto se encuentra en el carrito
              </p>
              <button type='button' className="btn btn-light btn-md mr-1 mb-2">
                <Link className="btn goToCart" to="/cart/">Ir al carrito</Link>
              </button>
            </div>
          ) : (
            <ItemCount
              stock={props.stock}
              initial={1}
              onPlus={() => onPlus(props)}
              onSubstract={onSubstract}
              number={number}
              onAdd={onAdd}
            />
          )}
        </div>
      </div>
    </section>
  );
};

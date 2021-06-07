import "./Item.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

export const Item = (props) => {
  useEffect(() => {Aos.init({duration:700})})
 
  return (
  
     <div data-aos="flip-left"className="col-12 col-sm-8 col-md-6 col-lg-4">
    <div className="card tarjetaProd">
        <img className="card-img imageCard" src={props.product.image}
        alt={props.title}></img>
        <div className="card-body cardText">
          <h4 className="card-title">{props.product.title}</h4>
           <div className="buy d-flex justify-content-between align-items-center">
            <div className="price text-success"><h5 className="mt-4">{props.product.price}$</h5></div>
            <i className="fas fa-shopping-cart"></i><Link to={`/item/${props.product.id}`} className="btn btn-primary mt-3">Ver detalle</Link>
          </div>
          </div>
          </div>
          </div>
  );
}; 


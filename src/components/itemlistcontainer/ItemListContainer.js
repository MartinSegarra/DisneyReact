import "./ItemListContainer.css";
import { Product } from "../product/Product";

export const ItemListContainer = (props) => {
    return (<div className="productList">
      <Product greeting={props.greeting} />
    </div>)
};

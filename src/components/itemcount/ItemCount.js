import "./ItemCount.css";


export const ItemCount = ({ stock, number, onAdd, onSubstract, onPlus }) => {
  return (

    <> 
    { stock >0 ? (<div className="ItemCount">
      <button className="AddSubstractButtons btn btn-light btn-md mr-1 mb-2 minus" onClick={onSubstract}>
        -
      </button>
      <p className="StockNumber">{number}</p>
      <button className="AddSubstractButtons btn btn-light btn-md mr-1 mb-2 plus" onClick={onPlus}>
        +
      </button>
      <p className="StockNumber">Stock disponible: {stock}</p>
      <button onClick={onAdd} type="button" className="btn btn-light btn-md mr-1 mb-2"><i
          className="fas fa-shopping-cart pr-2"></i>Agregar {number} al carrito</button>
    </div>) : (<h4>Lo sentimos, no hay stock de ese producto</h4>)} 
    
    </>
  );
};


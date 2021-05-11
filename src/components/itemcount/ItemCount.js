import "./ItemCount.css";


export const ItemCount = ({ stock, number, onAdd, onSubstract, onPlus }) => {
  return (
    <div className="ItemCount">
      <button className="AddSubstractButtons" onClick={onSubstract}>
        -
      </button>
      <p className="StockNumber">{number}</p>
      <button className="AddSubstractButtons" onClick={onPlus}>
        +
      </button>
      <p className="StockNumber">Stock disponible: {stock}</p>
      <button onClick={onAdd}>Agregar {number} al carrito</button>
    </div>
  );
};

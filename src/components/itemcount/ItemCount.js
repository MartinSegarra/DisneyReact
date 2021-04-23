import "./ItemCount.css";
import { useState } from "react";

export const ItemCount = ({ stock, initial }) => {
  const [number, setNumber] = useState(initial);

  function onAdd() {
    if (number < stock) {
      setNumber(number + 1);
    } else {
      setNumber(stock);
    }
  }

  function onSubstract() {
    if (number > initial) {
      setNumber(number - 1);
    } else {
      setNumber(initial);
    }
  }

  return (
    <div className="ItemCount">
      <button className="AddSubstractButtons" onClick={onSubstract}>
        -
      </button>
      <p className="StockNumber">{number}</p>
      <button className="AddSubstractButtons" onClick={onAdd}>
        +
      </button>
      <p className="StockNumber">Stock disponible: {stock}</p>
    </div>
  );
};

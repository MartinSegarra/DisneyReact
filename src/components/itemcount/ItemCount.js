import "./ItemCount.css";
import { useState } from "react";

export const ItemCount = ({ stock, number, onAdd, onSubstract, finalizePurchase }) => {
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
      <button onClick={finalizePurchase}>Agregar {number} al carrito</button>
    </div>
  );
};

import "./PurchaseForm.css";
import { useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import firebase from "firebase/app";
import {Link} from 'react-router-dom'

export const PurchaseForm = () => {
  const { cart, totalCartPrice,clearCart} = useContext(CartContext);
  

  const [orderId, setOrderId] = useState("");
  const [purchaseComplete, setPurchaseComplete] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  

  function finalizePurchase(e) {
    e.preventDefault();

    const db = getFirestore();
    const orders = db.collection("orders");
    const newPurchase = {
      buyer: {
        name,
        email,
        phone,
      },
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalCartPrice(cart),
    };

    orders.add(newPurchase).then(({ id }) => {
      updateStock() 
      setOrderId(id);
      setPurchaseComplete(true)
      
    });

  }

const updateStock = async ()=> {

const db= getFirestore()
const batch = db.batch()

cart.forEach(
    (item)=> {
        const itemSelected= db.collection('items').doc(item.id)
        batch.update(itemSelected, {stock: item.stock - item.quantity})
    
} )  

await batch.commit()

}



  return (
    <div>
   {purchaseComplete ? (<button className='backToHome' onClick={clearCart}> <Link to="/">Regresar al inicio</Link></button>) : (
     
    
    <form name="PurchaseForm" className="PurchaseForm">
      <input
        onChange={(e) => setName(e.target.value)}
        id="name"
        className="input-text js-input"
        
        required
      />
      <label className="label" htmlFor="name">
        Nombre y Apellido
      </label>

      <input
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        className="input-text js-input"
        
        required
      />
      <label className="label" htmlFor="email">
        E-mail
      </label>

      <input
        onChange={(e) => setPhone(e.target.value)}
        id="phone"
        className="input-text js-input"
        
        required
      />
      <label className="label" htmlFor="phone">
        Teléfono
      </label>

      <button
        onClick={finalizePurchase}
        className="submit-btn"
      > Finalizar compra</button>
    </form>)}

    </div>
   
  );
};

import "./PurchaseForm.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import firebase from "firebase/app";
import { Link } from "react-router-dom";


export const PurchaseForm = () => {
  const { cart, totalCartPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  function finalizePurchase(e) {
    e.preventDefault();

    const db = getFirestore();
    const orders = db.collection("orders");
    const newPurchase = {
      buyer: {
        name,
        email,
        phone,
        address,
      },
      items: cart.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
      })),
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalCartPrice(cart),
    };

    orders.add(newPurchase).then(({ id }) => {
      updateStock();
      setOrderId(id);
      setPurchaseComplete(true);
      clearCart();
    });
  }

  const updateStock = async () => {
    const db = getFirestore();
    const batch = db.batch();

    cart.forEach((item) => {
      const itemSelected = db.collection("items").doc(item.id);
      batch.update(itemSelected, { stock: item.stock - item.quantity });
    });

    await batch.commit();
  };

  return (
    <div>
      {purchaseComplete ? (
        <section className="thankYouPage">
          <div
            id="page-content"
            className="d-flex flex-wrap align-content-center"
          >
            <div className="container-fluid">
              <div className="row d-block jumbotron text-center thankYouPage">
                <h1 className="display-3 thankYouText title">¡Gracias!</h1>
                <p className="thankYouMessage">
                  El ID de tu compra es <strong>{orderId}</strong>{" "}
                </p>
                <button className="btn btn-light btn-md mr-1 mb-2 backToHome">
                  <Link className="btn" to="/">
                    Volver a la Home
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="get-in-touch">
          <h4 className="title">Llená tus datos para completar la compra</h4>
          <form name="form_contacto" className="contact-form row">
            <div className="form-field col-lg-6">
              <input
                onChange={(e) => setName(e.target.value)}
                id="name"
                className="input-text js-input"
                type="text"
                required
              />
              <label className="label" htmlFor="name">
                Nombre y Apellido
              </label>
            </div>
            <div className="form-field col-lg-6 ">
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="input-text js-input"
                type="email"
                required
              />
              <label className="label" htmlFor="email">
                E-mail
              </label>
            </div>
            <div className="form-field col-lg-6 ">
              <input
                onChange={(e) => setPhone(e.target.value)}
                id="phone"
                className="input-text js-input"
                type="text"
                required
              />
              <label className="label" htmlFor="phone">
                Teléfono
              </label>
            </div>
            <div className="form-field col-lg-6 ">
              <input
                onChange={(e) => setAddress(e.target.value)}
                id="phone"
                className="input-text js-input"
                type="text"
                required
              />
              <label className="label" htmlFor="phone">
                Dirección
              </label>
            </div>
            <div className="form-field col-lg-12 button">
              <input
                onClick={finalizePurchase}
                className="submit-btn"
                type="submit"
                defaultValue="Enviar"
              />
            </div>
          </form>
        </section>
      )}
    </div>
  );
};

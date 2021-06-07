import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import { Footer } from "./components/footer/Footer"
import { ItemListContainer } from "./components/itemlistcontainer/ItemListContainer";
import { ItemDetailContainer } from "./components/itemdetailcontainer/ItemDetailContainer";
import { Category } from "./pages/category/Category"
import { Cart } from "./components/cart/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "../src/context/CartContext";
import { PurchaseForm } from "../src/components/purchaseform/PurchaseForm"


function App() {


  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/category/:categoryId">
            <Category />
          </Route>
          <Route path="/item/:productId">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/purchase">
            <PurchaseForm />
          </Route>
        </Switch>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

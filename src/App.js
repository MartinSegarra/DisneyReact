import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import { ItemListContainer } from "./components/itemlistcontainer/ItemListContainer";
import { ItemDetailContainer } from "./components/itemdetailcontainer/ItemDetailContainer";
import { Cart } from "./components/cart/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "../src/context/CartContext";


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
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <footer></footer>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

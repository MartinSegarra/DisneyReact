import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import { ItemListContainer } from "./components/itemlistcontainer/ItemListContainer";
import { ItemDetailContainer } from "./components/itemdetailcontainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
      </Switch>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;

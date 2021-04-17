import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import { ItemListContainer } from "./components/itemlistcontainer/ItemListContainer";
import { Wrapper } from "./components/wrapper/Wrapper"

function App() {
  const hello = 'Bienvenidos al Disney Store';

  return (
    <div className="App">
      <NavBar />
      <Wrapper>
      <ItemListContainer greeting={hello}/>
      </Wrapper>
    </div>
  );
}

export default App;

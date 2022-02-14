import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Home from "./component/home.component";

import ProductList from "./component/product.list.component";
import NavBar from "./navBar/navBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Switch>
          <Route path="/products/list" exact>
            <ProductList />
          </Route>

          <Route path="/home" exact>
            <Home />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;

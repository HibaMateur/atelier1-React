import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Home from "./component/home.component";

import ProductList from "./component/product.list.component";
import NavBar from "./navBar/navBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/products/list" component={ProductList} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

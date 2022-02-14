import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Home from "./component/home.component";

import ProductList from "./component/product.list.component";
import NavBar from "./navBar/navBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/home" component={Home}></Route>
          <Route path="/products/list" exact component={ProductList}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

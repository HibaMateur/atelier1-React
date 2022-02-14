import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Home from "./component/home.component";

import ProductList from "./component/product.list.component";
import NavBar from "./navBar/navBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" exact component={Home} />
        <Route path="/products/list" component={ProductList} />
      </Routes>
    </Router>
  );
}

export default App;

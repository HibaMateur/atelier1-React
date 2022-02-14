import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

import ProductList from "./component/product.list.component";
import NavBar from "./navBar/navBar";

function App() {
  return <ProductList />;
}

export default App;

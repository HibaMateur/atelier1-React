import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Home from "./component/home.component";

import ProductList from "./component/product.list.component";
import NavBar from "./navBar/navBar";

function App() {
  return (
    <AppFrame>
      {Products.map((p) => (
        <ProductList name={p.name} price={p.price} img={p.img} />
      ))}
    </AppFrame>
  );
}
const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  margin-left: 30%;
`;

export default App;

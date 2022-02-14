import styled from "styled-components";
import "./App.css";
import ProductList from "./component/product.component";
import Home from "./component/home.component";
import Products from "./product.json";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./navBar/navBar";

function App() {
  return (
    <AppFrame>
      <BrowserRouter>
        <NavBar />
        <main></main>
      </BrowserRouter>
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

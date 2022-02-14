import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

import ProductList from "./component/product.list.component";
import NavBar from "./navBar/navBar";

function App() {
  return (
    <AppFrame>
      <ProductList />
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
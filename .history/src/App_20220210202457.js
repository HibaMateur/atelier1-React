import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Product from "./component/product.component";
import ProductList from "./component/product.list.component";
import NavBar from "./navBar/navBar";

import Products from "./product.json";

function App() {
  return (
    <AppFrame>
      <BrowserRouter>
        <NavBar />
        <main>
          <Route path="/products/list" exact>
            <ProductList />
          </Route>
        </main>
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

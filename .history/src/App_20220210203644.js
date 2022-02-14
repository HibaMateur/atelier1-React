import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

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
          <Route path="/" exact>
            <Redirect to="/anime" />
          </Route>
          <Route path="/anime/add" exact>
            <AnimesForm />
          </Route>

          <Route path="/anime/details/:animeId">
            <AnimesDetails />
          </Route>
          <Route path="/anime/edit/:animeId">
            <AnimesFormUpdate />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import ProductList from "./component/product.component";
import React, { useEffect, useState } from "react";
import Products from "./product.json";

function App() {
  let container = [];
  Products.forEach((val, index) => {
    container.push(
      <ProductList name={val.name} price={val.price} img={val.img} />
    );
  });

  return (
    <div>
      {menu}
      <div>
        My list of products from the json file by creating a component for every
        product
        {container}
      </div>
    </div>
  );
}

export default App;

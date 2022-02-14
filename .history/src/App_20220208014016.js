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

  return <div>{container}</div>;
}

export default App;

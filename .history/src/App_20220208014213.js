import logo from "./logo.svg";
import "./App.css";
import ProductList from "./component/product.component";
import React, { useEffect, useState } from "react";
import Products from "./product.json";

function App() {
  let container = [];

  return (
    <div>
      {Products.map((p, index) => (
        <ProductList name={p.name} price={p.price} img={p.img} />
      ))}
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import ProductList from "./Components/product.component";
import React, { useEffect, useState } from "react";
import Products from "./products.json";

function App() {
  const menu = (
    <div>
      <ul id="nav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
  let container = [];
  Products.forEach((val, index) => {
    container.push(<Product name={val.name} price={val.price} img={val.img} />);
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

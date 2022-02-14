import Product from "./product.component";
import Products from "../product.json";
import { useState } from "react";

function ProductsDetails() {
  const [products, setProducts] = useState("");
  const fetchData = async () => {
    setProducts(Products);
  };
  return (
    <div>
      <ul>
        <li key={Products.name}>
          <button onClick={fetchData}></button>
        </li>
      </ul>
    </div>
  );
}
export default ProductsDetails;

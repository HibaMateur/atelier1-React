import Product from "./product.component";
import Products from "../product.json";
import { useState } from "react";

function ProductsDetails() {
  const [products, setProducts] = useState("");
  const fetchData = async () => {
    setProducts(Products.data);
  };
  return (
    <div>
      <ul>
        <li key={Products.name}>
          <Product
            name={Products.name}
            price={Products.price}
            img={Products.img}
          />
        </li>
      </ul>
    </div>
  );
}
export default ProductsDetails;

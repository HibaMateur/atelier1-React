import Product from "./product.component";
import Products from "../product.json";

function ProductsDetails() {
  return (
    <div className="book" key={p.name}>
      <h3>Products </h3>
      <h2>{Products.name}</h2>
    </div>
  );
}

export default ProductsDetails;

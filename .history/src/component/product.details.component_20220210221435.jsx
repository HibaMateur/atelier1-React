import Product from "./product.component";
import Products from "../product.json";

function ProductsDetails() {
  return (
    <div className="products" key={Products.name}>
      <h3>Products </h3>
    </div>
  );
}

export default ProductsDetails;

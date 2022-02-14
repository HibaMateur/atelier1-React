import Product from "./product.component";
import Products from "../product.json";

function ProductsDetails() {
  Products((p, index) => {
    return (
      <div className="book" key={p.name}>
        <h3>Products </h3>
        <h2>{p.name}</h2>
      </div>
    );
  });
}

export default ProductsDetails;

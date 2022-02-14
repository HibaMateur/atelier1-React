import Product from "./product.component";
import Products from "../product.json";

function ProductsDetails() {
  Products.map((p, index) => {
    return (
      <div className="book" key={index}>
        <h3>Products </h3>
        <h2>{p.name}</h2>
      </div>
    );
  });
}

export default ProductsDetails;

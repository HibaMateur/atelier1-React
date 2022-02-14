import Product from "./product.component";
import Products from "../product.json";

function ProductsDetails() {
  return (
    <ul>
      <li key={Products.name}>
        <Product price={Products.price} img={Products.img} />
      </li>
    </ul>
  );
}
export default ProductsDetails;

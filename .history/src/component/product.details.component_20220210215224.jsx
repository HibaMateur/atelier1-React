import Product from "./product.component";
import Products from "../product.json";

function ProductsDetails(data) {
  return (
    <ul>
      <li key={Products.name}>
        {Products.price}
        {Products.img}
      </li>
    </ul>
  );
}
export default ProductsDetails;

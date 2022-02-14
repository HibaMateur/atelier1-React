import Product from "./product.component";
import Products from "../product.json";

function ProductsDetails(data) {
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

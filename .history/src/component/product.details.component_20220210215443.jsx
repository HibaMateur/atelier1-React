import Product from "./product.component";
import Products from "../product.json";

function ProductsDetails(data) {
  return (
    <div>
      <ul>
        {Products.map((p) => (
          <li key={Products}>
            <Product name={p.name} price={p.price} img={p.img} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductsDetails;

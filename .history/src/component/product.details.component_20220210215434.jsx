import Product from "./product.component";
import Products from "../product.json";

function ProductsDetails(data) {
  return (
    <div>
      {Products.map((p) => (
        <li key={Products}>
          <Product name={p.name} price={p.price} img={p.img} />
        </li>
      ))}
    </div>
  );
}
export default ProductsDetails;

import Product from "./product.component";
import Products from "../product.json";

function ProductsDetails(data) {
  return (
    <div>
      {Products.map((p) => (
        <Product name={p.name} price={p.price} img={p.img} />
      ))}
    </div>
  );
}
export default ProductsDetails;

import Product from "./product.component";
import Products from "../product.json";

function ProductsDetails() {
  return (
    <div>
      {Products.map((productDetail, i) => {
        return (
          <ul>
            <li key={productDetail.name}>
              {productDetail.name}
              {productDetail.img}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default ProductsDetails;

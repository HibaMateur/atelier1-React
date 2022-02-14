import Product from "./product.component";
import Products from "../product.json";
import { useParams } from "react-router-dom";

function ProductsDetails() {
  const { Products } = useParams();
  return <div>Product id:{Products.name}</div>;
}

export default ProductsDetails;

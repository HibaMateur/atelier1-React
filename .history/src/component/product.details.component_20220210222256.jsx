import Product from "./product.component";
import Products from "../product.json";
import { useParams } from "react-router-dom";

function ProductsDetails() {
  const { name } = useParams();
  return <div>Product id:{name}</div>;
}

export default ProductsDetails;

import Product from "./product.component";
import Products from "../product.json";
import { useParams } from "react-router-dom";

function ProductsDetails(data) {
  const { productName } = useParams();
  return (
    <div className="full-detail">
      <div className="explore-container">
        {data
          .filter((list) => list.name === productName)
          .map((list) => (
            <div className="full-card" key={list.ame}>
              <h2>Name: {list.name}</h2>
              <h4>Category: {list.price}</h4>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductsDetails;

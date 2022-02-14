import Product from "./product.component";
import Products from "../product.json";
import { useParams } from "react-router-dom";

function ProductsDetails(data) {
  const { name } = useParams();
  return(
      <div>
  <div className="explore-container">
  {
    data
      .filter((list) => list.name === name)
      .map((list) => (
        <div className="full-card" key={ list.id }>
          <h2>Name: {list.name}</h2>
          <h4>Category: {list.price}</h4>
        </div>
      ))}
</div>
</div>
)
}

}

export default ProductsDetails;

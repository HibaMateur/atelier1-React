import Product from "./product.component";
import Products from "../product.json";

function ProductsDetails(data) {
  return (
    data &&
    data.map((d) => {
      return (
        <div className="card" key={d.id} style={{ background: d.color }}>
          <div className="container">
            <h4>
              <b>{d.name}</b>
            </h4>
            <p>{d.price}</p>
          </div>
        </div>
      );
    })
  );
}
export default ProductsDetails;

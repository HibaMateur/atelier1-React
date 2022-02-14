import Product from "./product.component";

function ProductsDetails(props) {
  return (
    <ul>
      <li key={props.id}>
        <Product price={props.price} img={props.img} />
      </li>
    </ul>
  );
}
export default ProductsDetails;

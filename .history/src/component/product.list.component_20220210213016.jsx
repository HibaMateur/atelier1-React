import { Link } from "react-router-dom";
import styled from "styled-components";

import Products from "../product.json";
import Product from "./product.component";

function ProductList() {
  return (
    <AppFrame>
      {Products.map((p) => (
        <Product name={p.name} price={p.price} img={p.img} />
      ))}
      <Link to={`/anime/details`}></Link>
    </AppFrame>
  );
}
const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  margin-left: 30%;
`;
export default ProductList;

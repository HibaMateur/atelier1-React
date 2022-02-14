import { Link } from "react-router-dom";
import styled from "styled-components";

import Products from "../product.json";
import Product from "./product.component";

function ProductList() {
  return (
    <AppFrame>
      {Products.map((p) => (
        <ul>
          <li>
            <Product name={p.name} />
          </li>
          <li>
            <Product name={p.img} />
          </li>
          <li>
            <Product name={p.price} />
          </li>
        </ul>
      ))}
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

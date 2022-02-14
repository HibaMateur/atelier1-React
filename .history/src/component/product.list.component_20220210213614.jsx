import { Link } from "react-router-dom";
import styled from "styled-components";

import Products from "../product.json";
import Product from "./product.component";

function ProductList() {
  return (
    <AppFrame>
      {Products.map((p) => (
        <table>
          <tr>
            <td>
              <Product name={p.name} />
            </td>
            <td>
              <Product name={p.img} />
            </td>
            <td>
              <Product name={p.price} />
            </td>
          </tr>
        </table>
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

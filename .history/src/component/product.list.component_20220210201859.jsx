import styled from "styled-components";
import "./App.css";

import Products from "./product.json";

function ProductList() {
  return (
    <AppFrame>
      {Products.map((p) => (
        <ProductList name={p.name} price={p.price} img={p.img} />
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

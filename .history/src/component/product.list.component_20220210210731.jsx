import styled from "styled-components";

import Products from "../product.json";
import Product from "./product.component";

const ProductList = () => {
  return (
    <AppFrame>
      {Products.map((p) => (
        <Product name={p.name} price={p.price} img={p.img} />
      ))}
    </AppFrame>
  );
};
const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  margin-left: 30%;
`;
export default ProductList;

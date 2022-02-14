import Product from "./product.component";
import Products from "../product.json";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function ProductsDetails() {
  const { productName } = useParams();
  return (
    <div className="full-detail">
      <div className="explore-container">
        {Products.filter((list) => list.name === productName).map((list) => (
          <div className="full-card" key={list.name}>
            <h2>Name: {list.name}</h2>
            <h4>Category: {list.price}</h4>
            <ProductImageWrapper>
              <ProductImage src={list.img}></ProductImage>
            </ProductImageWrapper>
          </div>
        ))}
      </div>
    </div>
  );
}
const ProductImageWrapper = styled.div`
  margin: 15px;
  max-width: 100%;
`;
const ProductImage = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 25px;
`;

export default ProductsDetails;

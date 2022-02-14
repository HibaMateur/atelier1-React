import Product from "./product.component";
import Products from "../product.json";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function ProductsDetails() {
  const { productName } = useParams();
  return (
    <ProductsWrapper>
      <Container>
        {Products.filter((list) => list.name === productName).map((list) => (
          <div className="full-card" key={list.name}>
            <H1>Name: {list.name}</H1>
            <H3>Category: {list.price}</H3>
            <ProductImageWrapper>
              <ProductImage src={list.img}></ProductImage>
            </ProductImageWrapper>
          </div>
        ))}
      </Container>
    </ProductsWrapper>
  );
}
const ProductImageWrapper = styled.div`
  margin: 15px;
  max-width: 100%;
`;
const ProductImage = styled.img`
  width: 30%;
  height: 30%;
  border-radius: 25px;
`;

const ProductsWrapper = styled.div`
  text-align: center;
  display: flex;
`;
const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.5fr 0.5fr;
  grid-template-areas:
    "content content"
    "footer footer";
  text-align: left;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1.2fr 1fr;
    grid-template-areas:
      "content"
      "footer";
  }
  color: black;
`;
const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const Content1 = styled.div`
  background: transparent !important;
  padding: 0.25rem;
  width: 40%;
  height: 100%;
`;
const Content2 = styled.div`
  background: transparent !important;
  padding: 0.25rem;
  width: 60%;
  height: 100%;
`;
const Footer = styled.footer`
  background: transparent;
  grid-area: footer;
  padding: 0.25rem;
  text-align: right !important;
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const H1 = styled.h1`
  font-size: 3.5em;
  font-weight: bold;
`;

const H3 = styled.h3`
  color: palevioletred;
  font-size: 1.25em;
  font-weight: bold;
`;
const Span = styled.span`
  color: grey;
  font-size: 1.25em;
`;

export default ProductsDetails;

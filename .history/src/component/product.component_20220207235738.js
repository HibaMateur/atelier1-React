import { Component } from "react";
import styled from "styled-components";
import ProductData from "../product.json";

const ProductList = (props) => {
   
    this.addLikes = this.addLikes.bind(this);
  }
  state = {
    product: this.props.prod,
    likes: 0,
    updated: false,
  };
  addLikes() {
    this.setState((previous) => ({
      likes: previous.likes + 1,
      updated: true,
    }));
  }
  return (
    <AppFrame>
      {ProductData.map((productDetail, index) => {
        return (
          <ProductFrame key={index}>
            <ProductImageWrapper>
              <ProductImage src={productDetail.img}></ProductImage>
            </ProductImageWrapper>
            <ProductInfoWrapper>{productDetail.name}</ProductInfoWrapper>
            <ProductInfoWrapper>{productDetail.price}</ProductInfoWrapper>
            <p>likes :{this.state.likes}</p>

            <ProductInfoWrapper>
              <button onClick={this.handleIncrement}>Like</button>
            </ProductInfoWrapper>
          </ProductFrame>
        );
      })}
    </AppFrame>
  );
};
const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 150px;
  min-width: 150px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 150px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center`;

const AppFrame = styled.div`
  text-align: center;
  display: flex;
`;
export default ProductList;

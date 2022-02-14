import { Component } from "react";
import styled from "styled-components";
import ProductData from "../product.json";

class ProductList extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState(({ count }) => ({ count: count++ }));
  };

  render() {
    const { count } = this.state;
    const { cart, value } = this.props;
    return (
      <AppFrame>
        {ProductData.map((productDetail) => {
          return (
            <ProductFrame>
              <ProductImageWrapper>
                <ProductImage src={productDetail.img}></ProductImage>
              </ProductImageWrapper>
              <ProductInfoWrapper>{productDetail.name}</ProductInfoWrapper>
              <ProductInfoWrapper>{productDetail.price}</ProductInfoWrapper>
              <p>likes :{this.state.count}</p>

              <ProductInfoWrapper>
                <button onClick={this.handleIncrement}>Like</button>
              </ProductInfoWrapper>
            </ProductFrame>
          );
        })}
      </AppFrame>
    );
  }
}
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

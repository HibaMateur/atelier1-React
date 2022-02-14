import { Component } from "react";
import styled from "styled-components";
import ProductData from "../product.json";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { count: [0, 0, 0] };
  }
  handleClick(e) {
    const index = Number(e.currentTarget.value);

    this.setState(
      this.state.count.map((c, i) => {
        return i === 1 ? c + 1 : c;
      })
    );
  }

  render() {
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
              <p>likes :{this.state.count[index]}</p>
              console.log(this.state.count[index])
              <ProductInfoWrapper>
                <input type="button" onClick={this.handleClick} value={index} />
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

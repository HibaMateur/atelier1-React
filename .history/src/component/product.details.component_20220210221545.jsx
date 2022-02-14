import Product from "./product.component";
import Products from "../product.json";
import { Component } from "react";

export default class ProductsDetails extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <ProductFrame>
        <ProductImageWrapper>
          <ProductImage src={this.state.product.img}></ProductImage>
        </ProductImageWrapper>
        <ProductInfoWrapper>{this.state.product.name}</ProductInfoWrapper>
        <ProductInfoWrapper>{this.state.product.price}</ProductInfoWrapper>
        <p>likes : {this.state.likes}</p>
        <button onClick={this.addLikes}>Like</button>
        <ProductInfoWrapper>{this.state.product.likes}</ProductInfoWrapper>
      </ProductFrame>
    );
  }
}

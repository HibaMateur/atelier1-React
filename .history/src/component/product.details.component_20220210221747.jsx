import Product from "./product.component";
import Products from "../product.json";
import { Component } from "react";

export default class ProductsDetails extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    product: this.props.prod,
  };

  render() {
    return (
      <ul>
        <li key={this.state.product.name}>{this.state.product.name}</li>
      </ul>
    );
  }
}

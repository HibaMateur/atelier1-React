import { useState } from "react";
import styled from "styled-components";
import ProductList from "../component/product.component";

import Products from "../product.json";

function Home() {
  return <WelcomeWrapper>Welcome To Our Store</WelcomeWrapper>;
}
const WelcomeWrapper = styled.div`
  text-align: center;
  display: flex;
`;

export default Home;

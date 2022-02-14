import { useState } from "react";
import styled from "styled-components";
import ProductList from "./component/product.component";

function Home() {
  return <WelcomeWrapper></WelcomeWrapper>;
}
const WelcomeWrapper = styled.div`
  text-align: center;
  display: flex;
`;

export default Home;

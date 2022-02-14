import { useState } from "react";
import styled from "styled-components";

function Home() {
  const [hidden, setHidden] = useState(true);
  return <WelcomeWrapper> Welcome To Our Shop</WelcomeWrapper>;
}
const WelcomeWrapper = styled.div`
  text-align: center;
  display: flex;
`;

export default Home;

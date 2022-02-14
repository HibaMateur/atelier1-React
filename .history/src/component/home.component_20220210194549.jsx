import styled from "styled-components";

function Home(props) {
  return <WelcomeWrapper> Welcome To Our Shop</WelcomeWrapper>;
}
const WelcomeWrapper = styled.div`
  text-align: center;
  display: flex;
`;
export default Home;

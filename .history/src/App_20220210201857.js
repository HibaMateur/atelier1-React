import styled from "styled-components";
import "./App.css";
import Product from "./component/product.component";
import NavBar from "./navBar/navBar";

import Products from "./product.json";

function App() {
  return (
    <AppFrame>
      {Products.map((p) => (
        <Product name={p.name} price={p.price} img={p.img} />
      ))}
    </AppFrame>
  );
}
const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  margin-left: 30%;
`;
export default App;

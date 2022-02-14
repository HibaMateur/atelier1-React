import styled from "styled-components";
import "./App.css";
import ProductList from "./component/product.component";

import Products from "./product.json";

function App() {
  return (
    <AppFrame>
      <div>
        {Products.map((p) => (
          <ProductList name={p.name} price={p.price} img={p.img} />
        ))}
      </div>
    </AppFrame>
  );
}
const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;
export default App;

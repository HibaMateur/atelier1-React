import styled from "styled-components";
import "./App.css";
import ProductList from "./component/product.component";
import Home from "./component/home.component";
import Products from "./product.json";

function App() {
  return (
    <AppFrame>
      <Home></Home>>
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

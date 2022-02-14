import "./App.css";
import ProductList from "./component/product.component";

import Products from "./product.json";

function App() {
  return (
    <div>
      {Products.map((p) => (
        <ProductList name={p.name} price={p.price} img={p.img} />
      ))}
    </div>
  );
}
const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;
export default App;

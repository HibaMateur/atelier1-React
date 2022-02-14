import "./App.css";
import ProductList from "./component/product.component";
import Products from "../products.json";
function App() {
  return (
    <div className="App">
      {Products.map((p, index) => (
        <ProductList prod={p} key={index}></ProductList>
      ))}
    </div>
  );
}

export default App;

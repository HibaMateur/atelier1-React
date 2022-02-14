import "./App.css";
import ProductList from "./component/product.component";

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

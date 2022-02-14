import products from "./products.json";
import "./App.css";
import ProductList from "./component/product.component";

function App() {
  return (
    <div className="App">
      {products.map((p, index) => (
        <Product prod={p} key={index}></Product>
      ))}
    </div>
  );
}

export default App;

import "./App.css";
import ProductList from "./component/product.component";

import Products from "./product.json";

function App() {
  return (
    <div>
      {Products.map((p, index) => (
        <ProductList name={p.name} price={p.price} img={p.img} />
      ))}
    </div>
  );
}

export default App;

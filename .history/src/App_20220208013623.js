import "./App.css";
import ProductList from "./component/product.component";
import Products from "./product.json";

function App() {
  let container = [];
  Products.forEach((val, index) => {
    container.push(
      <Products name={val.name} price={val.price} img={val.img} />
    );
  });
  return <div className="App">{container}</div>;
}

export default App;

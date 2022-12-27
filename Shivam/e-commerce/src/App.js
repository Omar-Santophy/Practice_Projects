
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './Component/Navbar';

import ProductContextProvider, { ProductContext } from "./Global/ProductContext"
import  CartContextProvider from "./Global/CartContext"
import Products from './Component/Products';
import Cart from "./Component/Cart"
import NotFound from './Component/NotFound';
function App() {
  return (
    <div>
      <ProductContextProvider>
        <CartContextProvider>
        <Router>
        <Navbar />
    
          <Switch>
            <Route path="/" exact component={Products}/>
            <Route path="/cart" exact component={Cart}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
        </CartContextProvider>
        </ProductContextProvider>
    </div>
  );
}

export default App;

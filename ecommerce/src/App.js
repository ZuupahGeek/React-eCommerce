import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './views/Home';
import Products from './views/Products';
import ProductDetails from './views/ProductDetails';
import Login from './views/Login';
import Register from './views/Register';
import Admin from './views/Admin';
import Orders from './views/Orders';


// funktioner att använda:
// Protected route for ordrarna

function App() {
  return (
    <BrowserRouter>
      <Navbar />
   
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/orders" component={Orders}/>
      <Route exact path="/admin" component={Admin}/>
      {/* Admin ska vara protected route, liksom Order page */}
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/products" component={Products}/>
      <Route exact path="/productdetails/:id" component={ProductDetails}/>
    </Switch>




    </BrowserRouter>
  );
}

export default App;

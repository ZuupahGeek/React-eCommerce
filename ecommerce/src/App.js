import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './views/Home';
import ProductDetails from './views/ProductDetails';


// funktioner att använda:
// Protected route for ordrarna

function App() {
  return (
    <BrowserRouter>
      <Navbar />
   
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/productdetails/:id" component={ProductDetails}/>
    </Switch>




    </BrowserRouter>
  );
}

export default App;

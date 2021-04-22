import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './views/Home';


// funktioner att använda:
// Protected route for ordrarna

function App() {
  return (
    <BrowserRouter>
      <Navbar />
   
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>




    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';


// funktioner att använda:
// Protected route for ordrarna

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;

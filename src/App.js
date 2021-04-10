import './App.css';
import React from "react";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import FoodDetails from './components/FoodDetails/FoodDetails';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/food/details">
            <FoodDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

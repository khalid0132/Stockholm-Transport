
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Rider from './components/Rider/Rider';
import Book from './components/Book/Book';
import CheckOut from './components/CheckOut/CheckOut';

export const UserContext = createContext();

function App() {
  const [signInUser, setSignInUser] = useState({});
  return (
    <UserContext.Provider value={[signInUser, setSignInUser]}>
      <p>User email: {signInUser.email}</p>
      <Router>
            <Header></Header>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signin">
            <Signin></Signin>
          </Route>
          <Route path ="/rider">
            <Rider></Rider>
          </Route>
          <Route exact path ="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path = "/book/:rideType">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/checkout">
            <CheckOut/>
          </PrivateRoute>
            <Route exact path ="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;

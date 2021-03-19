
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



function App() {
  return (
      <Router>
            <Header></Header>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signin">
            <Signin></Signin>
          </Route>
          <Route path ="/home">
            <Home></Home>
          </Route>
          <Route exact path ="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
   
  );
}

export default App;

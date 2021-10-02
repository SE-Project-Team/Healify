import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home";
import {Signup} from "./Components/Signup";
import {Registration} from "./Components/Registration";
function App() {
  return (
    <div className="App">
      <Registration/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
        
      </header>
import { Signup } from "./Components/Signup";
import { Quiz } from "./Components/Quiz";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Quiz">
            <Quiz />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

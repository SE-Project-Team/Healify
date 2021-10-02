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
    </div>
  );
}

export default App;

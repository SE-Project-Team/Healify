import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home";
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

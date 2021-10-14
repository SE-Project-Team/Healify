import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home";
import { Signup } from "./Components/Signup";
import { Registration } from "./Components/Registration";
import { Quiz } from "./Components/Quiz";
import { Memes } from "./Components/Memes";
import { Milestones } from "./Components/Milsestones";
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
          <Route path="/Registration">
            <Registration />
          </Route>
          <Route path="/Memes">
            <Memes />
          </Route>
          <Route path="/Milestones">
            <Milestones />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

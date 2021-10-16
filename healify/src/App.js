import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home";
import { Signup } from "./Components/Signup";
import { Registration } from "./Components/Registration";
import { Quiz } from "./Components/Quiz";
import { Memes } from "./Components/Memes";
import { Milestones } from "./Components/Milsestones";
import { QuizLanding } from "./Components/QuizLanding";
import { Questions1 } from "./Components/Quiz/QueCategory1";
import { Questions2 } from "./Components/Quiz/QueCategory2";
import { Questions3 } from "./Components/Quiz/QueCategory3";
import { Questions4 } from "./Components/Quiz/QueCategory4";
import { Score } from "./Components/Quiz/Score";
import "./App.css";
import { useState } from "react";

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
          <Route path="/Registration">
            <Registration />
          </Route>
          <Route path="/Memes">
            <Memes />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/Milestones">
            <Milestones />
          </Route>
          <Route path="/QuizLanding">
            <QuizLanding />
          </Route>
          <Route path="/Quiz1">
            <Quiz questions={Questions1} />
          </Route>
          <Route path="/Quiz2">
            <Quiz questions={Questions2} />
          </Route>
          <Route path="/Quiz3">
            <Quiz questions={Questions3} />
          </Route>
          <Route path="/Quiz4">
            <Quiz questions={Questions4} />
          </Route>
          <Route path="/Score">
            <Score />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

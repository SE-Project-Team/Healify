import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home";
import { Signup } from "./Components/Signup";
import { Registration } from "./Components/Registration";
import { Quiz } from "./Components/Quiz";
import { Memes } from "./Components/Memes";
import { Milestones } from "./Components/Milsestones";
import { QuizLanding } from "./Components/QuizLanding";
import { Questions } from "./Components/Quiz/QueCategory1";
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
          <Route path="/Quiz">
            <Quiz questions={Questions.slice(0, 79)} />
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
            <Quiz questions={Questions.slice(0, 12)} />
          </Route>
          <Route path="/Quiz2">
            <Quiz questions={Questions.slice(12, 19)} />
          </Route>
          <Route path="/Quiz3">
            <Quiz questions={Questions.slice(19, 27)} />
          </Route>
          <Route path="/Quiz4">
            <Quiz questions={Questions.slice(27, 34)} />
          </Route>
          <Route path="/Quiz5">
            <Quiz questions={Questions.slice(34, 43)} />
          </Route>
          <Route path="/Quiz6">
            <Quiz questions={Questions.slice(43, 48)} />
          </Route>
          <Route path="/Quiz7">
            <Quiz questions={Questions.slice(48, 69)} />
          </Route>
          <Route path="/Quiz8">
            <Quiz questions={Questions.slice(69, 79)} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

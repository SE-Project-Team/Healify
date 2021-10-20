import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home";
import { Signup } from "./Components/Signup";
import { Registration } from "./Components/Registration";
import { Quiz } from "./Components/Quiz";
import { Memes } from "./Components/Memes";
import { MilestonesHome } from "./Components/Milestones/MilestonesHome";
import { Timeline } from "./Components/Milestones/Timeline";
import "./Components/Milestones/MilestonesHome.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { QuizLanding } from "./Components/QuizLanding";
import { Questions1 } from "./Components/Quiz/QueCategory1";
import { Questions2 } from "./Components/Quiz/QueCategory2";
import { Questions3 } from "./Components/Quiz/QueCategory3";
import { Questions4 } from "./Components/Quiz/QueCategory4";
import { Score } from "./Components/Score";
import { Statistics } from "./Components/Q1Statistics";
import Newsfinal from "./Components/News/NewsFinal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>
          <Route exact path="/News">
            <Newsfinal />
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
          <Route path="/MilestonesHome">
            <MilestonesHome />
          </Route>
          <Route path="/Timeline">
            <Timeline />
          </Route>
          <Route path="/QuizLanding">
            <QuizLanding />
          </Route>

          <Route path="/Quiz1">
            <Quiz
              category={"Ill Being and Well Being"}
              questions={Questions1}
            />
          </Route>
          <Route path="/Quiz2">
            <Quiz category={"Control and Coping"} questions={Questions2} />
          </Route>
          <Route path="/Quiz3">
            <Quiz
              category={"Relationships and Belonging"}
              questions={Questions3}
            />
          </Route>
          <Route path="/Quiz4">
            <Quiz category={"Self Perception"} questions={Questions4} />
          </Route>
          <Route path="/Score">
            <Score />
          </Route>
          <Route path="/Statistics">
            <Statistics />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Signup } from "./Components/Signup/Signup";
import { Registration } from "./Components/Signup/Registration";
import { Quiz } from "./Components/Quiz/Quiz";
import { Memes } from "./Components/Memes/Memes";
import { MilestonesHome } from "./Components/Milestones/MilestonesHome";
import { Timeline } from "./Components/Milestones/Timeline";
import "./Components/Milestones/MilestonesHome.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { QuizLanding } from "./Components/Quiz/QuizLanding";
import { Questions1 } from "./Components/Quiz/Questions/QueCategory1";
import { Questions2 } from "./Components/Quiz/Questions/QueCategory2";
import { Questions3 } from "./Components/Quiz/Questions/QueCategory3";
import { Questions4 } from "./Components/Quiz/Questions/QueCategory4";
import { Score } from "./Components/Quiz/Score";
import { Togglemenu } from "./Components/Milestones/Togglemenu";
import { QuizStatistics } from "./Components/Statistics/QuizStatistics";
import { Events } from "./Components/Events/Events";
import { MyEvents } from "./Components/OrganizersHome/MyEvents";
import { UpcomingEvents } from "./Components/OrganizersHome/UpcomingEvents";
import News from "./Components/News/News";
import { Recorder } from "./Components/DrumKit/Recorder";
import { Drumkit } from "./Components/DrumKit/Drumkit";
import Organizers from "./Components/OrganizersHome/Organizers";
import { Progressbar } from "./Components/Milestones/Progressbar";
import { Mailer } from "./Components/Mailer";
import { About } from "./Components/Milestones/About";
import { ColorGame } from "./Components/ColorGame/ColorGame";
import "./App.css";

import { useToken } from "./CustomHooks/useToken";
function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Signup setToken={setToken} />
            </Route>
            <Route path="/Registration">
              <Registration setToken={setToken} />
            </Route>
            <Route path="*">
              <h1 className={"warning"}>Please Login To continue</h1>
              <Signup setToken={setToken} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Signup setToken={setToken} />
          </Route>
          <Route path="/Registration">
            <Registration setToken={setToken} />
          </Route>
          <Route exact path="/News">
            <News />
          </Route>
          <Route exact path="/Organizers">
            <Organizers />
          </Route>
          <Route path="/Memes">
            <Memes />
          </Route>
          <Route path="/Mailer">
            <Mailer />
          </Route>
          <Route path="/MilestonesHome">
            <MilestonesHome />
          </Route>
          <Route path="/Timeline">
            <Timeline />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Togglemenu">
            <Togglemenu />
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
          <Route path="/QuizStatistics/1">
            <QuizStatistics category="Ill Being and Well Being" />
          </Route>
          <Route path="/QuizStatistics/2">
            <QuizStatistics category="Control and Coping" />
          </Route>
          <Route path="/QuizStatistics/3">
            <QuizStatistics category="Relationships and Belonging" />
          </Route>
          <Route path="/QuizStatistics/4">
            <QuizStatistics category="Self Perception" />
          </Route>
          <Route path="/Events">
            <Events />
          </Route>
          <Route path="/MyEvents">
            <MyEvents />
          </Route>
          <Route path="/UpcomingEvents">
            <UpcomingEvents />
          </Route>
          <Route path="/Recorder">
            <Recorder />
          </Route>
          <Route path="/Drumkit">
            <Drumkit />
          </Route>
          <Route path="/Progressbar">
            <Progressbar />
          </Route>
          <Route path="/ColorGame">
            <ColorGame />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

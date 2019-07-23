import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllCourtsPage from "./components/Court/AllCourtsPage";
import Courts from "./components/Courts";
import SingleCourtPage from "./components/Court/SingleCourtPage";
import CreateCourtForm from "./components/Court/CreateCourtForm";
import EditCourtForm from "./components/Court/EditCourtForm";
import Home from "./components/Home";
import "./App.css";
import Players from "./components/Players";
import SinglePlayer from "./components/SinglePlayer";
import ViewPlayerByCourtId from "./components/Player/ViewPlayerByCourtId";
import SinglePlayerPage from "./components/Player/SinglePlayerPage";
import CreatePlayerForm from "./components/Player/CreatePlayerForm";
import EditPlayerForm from "./components/Player/EditPlayerForm";
import DisplayProfile from "./components/Player/DisplayProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/courts" component={AllCourtsPage} />
          <Route exact path="/courts/create" component={CreateCourtForm} />
          <Route exact path="/courts/:courtId" component={SingleCourtPage} />
          {/* <Route exact path='/courts/:courtId' component={ViewPlayerByCourtId}/> */}
          <Route exact path="/courts/:courtId/edit" component={EditCourtForm} />
          <Route path="/players/:playerId" component={SinglePlayerPage} />
          <Route
            exact
            path="/player/:courtId/create"
            component={CreatePlayerForm}
          />
          {/* <Route
            exact
            path="/player/edit/:playerId"
            component={EditPlayerForm}
          /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

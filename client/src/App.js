import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllCourtsPage from './components/Court/AllCourtsPage'
import Courts from './components/Courts'
import SingleCourtPage from './components/Court/SingleCourtPage'
import CreateCourtForm from './components/Court/CreateCourtForm'
import EditCourtForm from './components/Court/EditCourtForm'
import Home from './components/Home'
import './App.css';
import Players from './components/Players'
import SinglePlayer from './components/SinglePlayer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/courts" component={AllCourtsPage}/>
          <Route exact path="/courts/create" component={CreateCourtForm}/>
          <Route exact path='/courts/:courtId' component={SingleCourtPage}/>
          <Route exact path="/courts/:courtId/edit" component={EditCourtForm}/> 

          {/* <Route exact path='/player/:courtId/create' component={CreateCourtForm} />
          <Route exact path='/player/edit/:playerId' component={EditCourtForm} />
          <Route path='/player/:playerId' component={SinglePlayerPage} /> */} */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

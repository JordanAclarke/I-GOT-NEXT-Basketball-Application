import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Courts from './components/Courts'
import SingleCourt from './components/SingleCourt'
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
          <Route exact path="/courts" component={Courts}/>
          <Route exact path='/courts/:courtId' component={SingleCourt}/>
          <Route exact path='/players' component={Players} />
          <Route path='/players/:playerId' component={SinglePlayer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

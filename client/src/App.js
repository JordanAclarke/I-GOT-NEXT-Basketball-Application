import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Courts from './components/Courts'
import SingleCourt from './components/SingleCourt'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/courts" component={Courts}/>
          <Route path='/courts/:courtId' component={SingleCourt}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

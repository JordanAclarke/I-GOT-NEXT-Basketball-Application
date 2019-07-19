import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Courts from './components/Courts'
import SingleCourt from './components/SingleCourt'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Courts}/>
          <Route path='/courts/:courtId' component={SingleCourt}  />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

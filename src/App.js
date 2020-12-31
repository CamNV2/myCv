import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Skill from './components/Skill';
import Experiences from './components/Experiences';
import Education from './components/Education';
import Project from './components/Project';

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path='/skills' component={Skill} />
          <Route path='/educations' component={Education} />
          <Route path='/experiences' component={Experiences} />
          <Route path='/project' component={Project} />
        </Switch>
      </>

    </Router>
  );
}

export default App;

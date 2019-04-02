import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Index from './page/Index';
import Dome from './page/Dome/index'

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/index' component={Index} />
            <Route path='/dome' component={Dome} />
          </Switch>
        </Router>
    )
  }
}

export default App;

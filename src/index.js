import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/Home'
import * as serviceWorker from './serviceWorker'

ReactDOM.render((
  <Router>
    <Route path="/">
      <Home />
    </Route>
  </Router>
), document.getElementById('root'));

serviceWorker.unregister();

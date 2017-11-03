import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';

// ReactDOM.render(
//   <App/>, document.getElementById('root'));

import A from './component/A';
import B from './component/B';
import C from './component/C';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={A}/>
      <Route path="home" component={A}/>
      <Route path="about" component={B}/>
      <Route path="contact" component={C}/>
    </Route>
  </Router>
), document.getElementById('root'));

registerServiceWorker();

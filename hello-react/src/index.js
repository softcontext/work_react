import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
// import Home from './Home';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Home />, document.getElementById('second'));

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(
//     document.getElementById('root'));
//   }, 5000);

registerServiceWorker();

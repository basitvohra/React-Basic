import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './App';

// import App from './Examples/API';
// import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col-md-10">        
      <h1>Hello World !!</h1>
    <App></App>    
    </div>
    </div>
  </div>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// ====================================== Custome code below

  /* Original code
  
<App></App>
 */

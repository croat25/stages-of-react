import React from 'react';
import { render } from 'react-dom'
import App from './App';
import './index.css';
import About from './modules/About';
import Repos from './modules/Repos';
import { Router, Route, hashHistory } from 'react-router';
import { Link } from 'react-router';
// import Msgreturn from './components/namereturn.js';
render((


	<Router history={hashHistory}>
    <Route path="/" component={App}>
    {/* add the routes here */}
    <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>
      </div>
      </Route>
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Router>

	)
  ,
  

  document.getElementById('root')
);

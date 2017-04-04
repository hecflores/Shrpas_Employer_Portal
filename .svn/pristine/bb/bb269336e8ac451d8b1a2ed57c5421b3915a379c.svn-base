import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link,browserHistory } from 'react-router'


/***************************************************************************/
/* Pages                                                                   */
/***************************************************************************/
import Questions from './src/questions/Questions.jsx';
import App from './App.jsx';
import About from './About.jsx';


/***************************************************************************/
/* Routes                                                                  */
/***************************************************************************/
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/questions" component={Questions}/>
    </Router>
), document.getElementById('app'))
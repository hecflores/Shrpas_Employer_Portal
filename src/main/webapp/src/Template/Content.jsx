import React from 'react';
import $ from 'jquery';
import { Router, Route, Link,browserHistory } from 'react-router'

import Home from '../Home/Home.jsx';
import Questions from '../Questions/Questions.jsx';
import About from '../About/About.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="col-lg-12">
                <Router history={browserHistory}>
                    <Route path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/questions" component={Questions}/>
                </Router>
            </div>

        )
    }
}

export default App;
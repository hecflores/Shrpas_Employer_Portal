import React from 'react';
import $ from 'jquery';

import Heading from './Heading.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="">
                <Heading/>
                <Content/>
                <Footer/>
            </div>

        )
    }
}

export default App;
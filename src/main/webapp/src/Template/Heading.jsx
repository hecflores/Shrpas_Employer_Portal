import React from 'react';
import $ from 'jquery';



class Heading extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">SHRPAS Employer</a>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Heading;
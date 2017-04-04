import React from 'react';
import $ from 'jquery';


class Home extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                {/*<div className="jumbotron">
                    <h1>Welcome to SHRPAS Employer Portal</h1>
                    <p>We are in the process of developing the website to its fullest. Please be patient and it will be done in no time</p>
                </div>
                <div className="media">
                    <div className="media-left">
                        <a href="#">
                            <img className="media-object" src="https://specials-images.forbesimg.com/imageserve/56fad895e4b0072dbd74173d/640x434.jpg?fit=scale&background=000000" alt="..."/>
                        </a>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">Currently Developing Questions</h4>
                        Please <a href="questions">Click Here</a> to see more
                    </div>
                </div>*/}
                <h2>Home Page</h2>
                <div className="pull-left">
                    <a className="btn btn-default" href="/app/group" role="button"><i className="glyphicon glyphicon-plus"/> Add new target group</a>
                </div>
                <div className="pull-right">
                    <a className="btn btn-default" href="/app/assessments/create" role="button"><i className="glyphicon glyphicon-plus"/> Add new assessment</a>
                </div>
            </div>
        );
    }
}

export default Home;
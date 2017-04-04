import React from 'react';
import $ from 'jquery';


class AssessmentTimer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timeInSeconds: this.props.timeInSeconds,
            isTimed: this.props.isTimed
        };
        this.handleChange = this.handleChange.bind(this);
        this.setTimeAllowed = this.setTimeAllowed.bind(this);
    }
    handleChange(event){
        const timeInSeconds = event.target.value;
        console.log(timeInSeconds);
        this.setState({
            timeInSeconds: timeInSeconds
        });
    }
    setTimeAllowed(){

        $.ajax({
            url: '/rest/assessments/' + this.props.assessmentID,
            contentType: 'application/json',
            method: 'PATCH',
            data:JSON.stringify({allowed_time_sec: this.state.timeInSeconds, is_timed: this.state.isTimed})
        }).done(function (data) {
            console.log("SUCCESS: You are not a terrible coder after all", data);
        }).error(function (data) {
            console.log("ERROR: YOU DONE GOOFED", data);
        });
    }
    render(){
        return(
            <span>
                <input type="text" onChange={this.handleChange} />
                <div onClick={this.setTimeAllowed} className="top-header-time-allowed-container">
                    <i className="fa fa-clock-o"/>
                    Time allowed
                </div>
            </span>
        );
    }
}

export default AssessmentTimer;
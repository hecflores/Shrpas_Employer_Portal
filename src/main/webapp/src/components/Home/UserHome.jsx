import React from "react";
import {Router, Route, browserHistory} from "react-router";
import Home from "../Home/Home.jsx";
import Questions from "../Questions/Questions.jsx";
import Video from "../Prototype/Video.jsx";
import Audio from "../Prototype/Audio.jsx";
import Assessment from "../Assessment/Assessments.jsx";
import AssessmentNew from "../Assessment/AssessmentNew.jsx";
import TargetGroups from "../Group/ImportParticipants.jsx";

import AssessmentTimer from "../Prototype/AssessmentTimer.jsx";
import AssessmentTargetGroup from "../Prototype/AssessmentTargetGroup.jsx";
import GetUserInput from "../UserLogin/LoginPage.jsx";
import UserAPI from "../../libaries/APIs/UserAPI.jsx";
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            loggedStatus:""
        };
        this.logout=this.logout.bind(this);

    }
    logout()
    {
        UserAPI.instance.logout();
    }
    componentDidMount(){
        this.setState({loggedStatus:"Logging In..."});
        var $this=this;
        UserAPI.instance.hookToUser(function(data){
            $this.setState({loggedStatus:"Logged In"})
        });
    }
    render() {
        return (
            <div className="user-container">
                <div className="user-status-container">
                    <div className="user-status">
                        {this.state.loggedStatus}
                    </div>
                </div>
                <div className="user-options-container">
                    <span onClick={this.logout} className="btn btn-primary log-out-button">Logout</span>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default App;
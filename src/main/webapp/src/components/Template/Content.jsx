import React from "react";
<<<<<<< HEAD
import {Router, Route, browserHistory,DefaultRoute, IndexRoute} from "react-router";
import Home from "components/Home/Home.jsx";
import GuestHome from "components/Home/GuestHome.jsx";

import Questions from "components/Questions/Questions.jsx";
import Video from "components/Prototype/Video.jsx";
import Audio from "components/Prototype/Audio.jsx";


import TargetGroups from "components/TargetGroup/TargetGroups.jsx";
import LoginPage  from "components/UserLogin/LoginPage.jsx";
import AssessmentTable from "components/UserAssessments/components/AssessmentTable.jsx";


import AssessmentTimer from "components/Prototype/AssessmentTimer.jsx";
import TargetGroup from "components/TargetGroup/TargetGroup.jsx";
import UserHome from "components/Home/UserHome.jsx";
import ImportEmails from "components/TargetGroup/ImportEmails.jsx";
import AssessmentTargetGroup from "components/Prototype/AssessmentTargetGroup.jsx";
import AssessmentNew from "components/Assessment/Pages/NewAssessment/AssessmentNew.jsx";
import Assessment from "components/Assessment/Assessment.jsx";
import AssessmentHomePage from "components/Assessment/Pages/AssessmentHome/AssessmentHomePage.jsx";
import NewOrExistingQuestionMiddlePage from "components/Assessment/Pages/NewOrExistingQuestionMiddlePage/NewOrExistingQuestionMiddlePage.jsx";
import NewQuestion from "components/Assessment/Pages/NewQuestion/NewQuestion.jsx";
import AddExistingQuestion from "components/Assessment/Pages/AddExistingQuestion/AddExistingQuestion.jsx";
import PreviewAssessmentsPage from "components/Assessment/Pages/PreviewAssessmentsPage/PreviewAssessmentsPage.jsx";
import UserProfile from "../Profile/UserProfile.jsx";
import RegisterPage from 'components/Register/RegisterPage.jsx';
=======
import {Router, Route, browserHistory} from "react-router";
import Home from "../Home/Home.jsx";
import Questions from "../Questions/Questions.jsx";
import Video from "../Prototype/Video.jsx";
import Audio from "../Prototype/Audio.jsx";
import Assessment from "../Assessment/Assessments.jsx";
import AssessmentNew from "../Assessment/AssessmentNew.jsx";
import TargetGroups from "../TargetGroup/TargetGroups.jsx";
import LoginPage from "../UserLogin/LoginPage.jsx";
import AssessmentTable from "../UserAssessments/components/AssessmentTable.jsx";


import AssessmentTimer from "../Prototype/AssessmentTimer.jsx";
import AssessmentTargetGroup from "../Prototype/AssessmentTargetGroup.jsx";
import TargetGroup from "../Group/TargetGroup.jsx";
import UserHome from "../Home/UserHome.jsx";
import UserAPI from "../../libaries/APIs/UserAPI.jsx";
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
class App extends React.Component {

    constructor(props) {
        super(props);

    }
<<<<<<< HEAD
    getChildContext(){
        return {
            root:this.root
        };
    }
=======
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
    componentDidMount(){

    }
    render() {
        return (
            <div className="" ref={(input) => { this.root = input; }}>
                <Router history={browserHistory}>
<<<<<<< HEAD
                    <Route path="/" component={GuestHome}>
                        <IndexRoute components={RegisterPage}/>
                    </Route>
                    <Route path="/app" component={UserHome}>
                        <IndexRoute component={Home}/>
                        <Route path="home" component={Home}/>
                        <Route path="target-groups" component={TargetGroups}/>
                        <Route path="target-groups/import-emails" component={ImportEmails}/>
                        <Route path="assessments" component={AssessmentTable}/>
                        <Route path="participant-popup" component={AssessmentTargetGroup}/>
=======
                    <Route path="/" component={LoginPage}/>
                    <Route path="/app" component={UserHome}>
                        <Route path="home" component={Home}/>
                        <Route path="target-groups" component={TargetGroups}/>
                        <Route path="assessments" component={AssessmentTable}/>
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
                        <Route path="questions" component={Questions}/>
                        <Route path="target-group/:targetGroup" component={TargetGroup}/>
                        <Route path="prototype" component={Video}/>
                        <Route path="audioPrototype" component={Audio}/>
                        <Route path="assessmentTimer" component={AssessmentTimer}/>
                        <Route path="assessments/create" component={AssessmentNew} />
<<<<<<< HEAD
                        <Route path="assessments/:assessmentID" component ={Assessment}>
                            <IndexRoute component={AssessmentHomePage}/>
                            <Route path="home" component={AssessmentHomePage}/>
                            <Route path="add-question" component={NewOrExistingQuestionMiddlePage}>
                                <Route path="new-question" component={NewQuestion}/>
                                <Route path="existing-question" component={AddExistingQuestion}/>
                            </Route>
                            <Route path="preview" component={PreviewAssessmentsPage}/>
                        </Route>
                        <Route path="profile" component={UserProfile} />
=======
                        <Route path="assessments/:assessmentID" component ={Assessment}/>
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
                    </Route>

                </Router>
            </div>

        )
    }
}
App.childContextTypes={
    root:React.PropTypes.element
}
export default App;
import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
<<<<<<< HEAD
import BasicSideToolBox from 'components/Template/PageContent.jsx';
import TargetGroups from 'components/TargetGroup/TargetGroups.jsx';
import TargetGroupButTogether from '../TargetGroup/TargetGroupButTogether.jsx';
=======

>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
class Home extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <BasicSideToolBox PageTitle="Home">
                <div className="pull-left">
<<<<<<< HEAD
                    <Link className="btn btn-default" to="/app/target-groups" role="button"><i className="glyphicon glyphicon-plus"/> Add new target group</Link>
=======
                    <a className="btn btn-default" href="/app/target-groups" role="button"><i className="glyphicon glyphicon-plus"/> Add new target group</a>
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
                </div>
                <div className="pull-right">
                    <Link className="btn btn-default" to="/app/assessments/create" role="button"><i className="glyphicon glyphicon-plus"/> Add new assessment</Link>
                </div>
                <TargetGroupButTogether/>
            </BasicSideToolBox>
        );
    }
}

export default Home;
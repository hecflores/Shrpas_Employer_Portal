import React from 'react';
<<<<<<< HEAD
import { browserHistory } from 'react-router';

=======
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e

import Header from './Header.jsx';
import Table from './Table.jsx';
import Footer from './Footer.jsx';
<<<<<<< HEAD
import APIComponent from 'components/Containers/APIComponent.jsx';
import AssessmentAPI from 'libaries/APIs/AssessmentAPI.jsx';
import PageContent from 'components/Template/PageContent.jsx';

class AssessmentTable extends React.Component {
  constructor(props) {
        super(props);

      
    }
    componentDidMount(){

      //AssessmentAPI.instance.initiate("get-assessments");
    }

    render() {

    return( <PageContent className="full-height" PageTitle="Assessment Center" NoContainer={true}>
                <div id="assessments-v2">
                    <div className="outerborder">
                        <Header/>
                        <APIComponent Fetch={true} APIListener={AssessmentAPI.instance} Event={"get-assessments"}>
                            {function(data,change,send,setData,isLoading){
                                return <Table data={data.Assessments} {...this.props}/>
                            }.bind(this)}
                        </APIComponent>
                        <Footer/>
                    </div>
                </div>
            </PageContent>
=======

class AssessmentTable extends React.Component {
  render() {
    var words = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    return( 

      <div className="outerborder">
        <Header/>
        <Table itemTotal="10" words={words}/>
        <Footer/>
      </div>
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
    );
      
  }
}
<<<<<<< HEAD
AssessmentTable.propTypes={
    onSelect:React.PropTypes.func
};
AssessmentTable.defaultProps={
    onSelect:function(assessment){
        browserHistory.push("/app/assessments/"+assessment["id"]+"/home");
    }
};
=======

>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
export default AssessmentTable;






import Questions from "../../../Questions/Questions.jsx";
import React from "react";
import $ from "jquery";

class AdminReview extends React.Component{

    constructor(props){
        super(props);
        //this.state={assessment:{}};
    }
    // componentDidMount(){
    //     var $this=this;

    //   //Not Made yet but in progress
    //   //AssessmentAPI.hookToAssessment(this.props.assessmentID,function(assessment){
    //   //      $this.setState({assessment:assessment});
    //   //);
      
    //   //Do this for now
      // +this.props.assessmentID+
    //   $.get("/rest/assessments/"1"/",{"_":$.now()},function(data)
    //   {        
    //   data.questions=data.questionSet;
    //   $this.setState({assessment:data});
    //   });
    // }
    render() {
        return (
            <div>
                {/*Need to figure out how to access other columns of the assessment*/}
                <h1>Assessment Name:</h1> 
                <h5>Expiration Date: </h5>
                <h5>Time allowed: </h5>
                <Questions questions={this.props.assessment.questions} />
                {/* <div>questions</div> Here you put buttons to submit assessment  */}
            </div>
        );
    }
}

export default AdminReview;
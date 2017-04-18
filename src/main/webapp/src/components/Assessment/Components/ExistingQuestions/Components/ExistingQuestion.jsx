import React from "react";
import $ from "jquery";
import ExistingQuestionChoice from './ExistingQuestionChoice.jsx';

/**
 * Existing Question Component
 * @description This will render a single question in the existing questions component
 */
class ExistingQuestion extends React.Component{
    constructor(props){
        super(props);

        this.questionTypeMap = {
            'text': 'Text Question',
            'multiple-choice': 'Multiple Choice Question',
            'code': 'Code Question',
            'audio': 'Audio Question',
            'video': 'Video Question'
        }
    }
    addExistingQuestionToAssessment(){
        const questionID = this.props.question.id;
        const assessmentID = this.props.assessmentID;
        $.ajax({
            url: '/rest/assessments/' + assessmentID + '/question/' + questionID,
            method: 'POST',
            contentType: 'application/json',
        }).done(function (data) {
            console.log("Completed Saved:", data);
            window.location.href = '/app/assessments/' + assessmentID;
        }).error(function (message) {
            console.log("ERROR: ", message);
        });
    }
    render(){
        const questionType = this.questionTypeMap[this.props.question.type];
        const questionContent = JSON.parse(this.props.question.content);
        const questionText = questionContent.question;
        let questionBody = (<div></div>);
        if("choices" in questionContent){
            const questionChoicesRender = questionContent.choices.map((choice, index) => {
                return <ExistingQuestionChoice key={index} choice={choice}/>;
            });
            questionBody = (
                <div className="multiple-choice-answer-choice-container">
                    {questionChoicesRender}
                </div>);
        }
        return(
            <div className="" style={{borderRadius:'10px',padding:'10px',margin:'5px',boxShadow:'0px 1px 3px black'}} >
                <h3>{questionText}</h3>
                <h5>Type: {questionType}</h5>
                {questionBody}
                <span className="float-right">
                    <button className="btn btn-success" onClick={() => this.addExistingQuestionToAssessment()}>Add Question To Assessment</button>
                </span>
            </div>
        );
    }
}

export default ExistingQuestion;
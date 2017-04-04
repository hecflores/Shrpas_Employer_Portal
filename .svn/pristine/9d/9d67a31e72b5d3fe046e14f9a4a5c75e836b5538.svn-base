import React from 'react';
import Popup from 'react-popup';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Modal from 'react-modal';

import QuestionTypes from '../Questions/QuestionTypes.jsx';
const MultipleChoiceDisplay=QuestionTypes.MultipleChoiceQuestion.Display;
const MultipleChoiceCreator=QuestionTypes.MultipleChoiceQuestion.Creator;
const CodeQuestionDisplay=QuestionTypes.CodeQuestion.Display;
const CodeQuestionCreator=QuestionTypes.CodeQuestion.Creator;
const VideoQuestionDisplay=QuestionTypes.VideoQuestion.Display;
const VideoQuestionCreator=QuestionTypes.VideoQuestion.Creator;
const TextQuestionDisplay=QuestionTypes.TextQuestion.Display;
const TextQuestionCreator=QuestionTypes.TextQuestion.Creator;
const AudioQuestionDisplay=QuestionTypes.AudioQuestion.Display;
const AudioQuestionCreator=QuestionTypes.AudioQuestion.Creator;

import Questions from '../Questions/Questions.jsx';

class Assessment extends React.Component{
    constructor(props) {
        super(props);
        var $this=this;
        this.state={"step":0,questions:[]};
        this.SideBar=(<div className="col-lg-1 assessment-side-panel">
                <span className="assessment-side-panel-item btn btn-block btn-default" ><span className="glyphicon glyphicon-plus"></span></span>
                <span className="assessment-side-panel-item btn btn-block btn-primary" ><span className="glyphicon glyphicon-home"></span></span>
                <span className="assessment-side-panel-item btn btn-block btn-primary" ><span className="glyphicon glyphicon-user"></span></span>
                <span className="assessment-side-panel-item btn btn-block btn-primary" ><span className="glyphicon glyphicon-th"></span></span>
                <span className="assessment-side-panel-item btn btn-block btn-primary" ><span className="glyphicon glyphicon-check"></span></span>
            </div>);

        /*******************************************************************/
        this.questionTypes=
            {
                'code': (
                    <CodeQuestionCreator question={this.props.question}>

                    </CodeQuestionCreator>
                ),
                'text': (
                    <TextQuestionCreator  question={this.props.question}>

                    </TextQuestionCreator>
                ),
                'audio': (
                    <AudioQuestionCreator question={this.props.question}>

                    </AudioQuestionCreator>
                ),
                'video': (
                    <VideoQuestionCreator question={this.props.question}>

                    </VideoQuestionCreator>
                ),
                'multiple-choice': (
                    <MultipleChoiceCreator question={this.props.question}>

                    </MultipleChoiceCreator>
                )
            };

        this.questionSelection=(
            <div className="col-lg-12 question-type-selection">
                <div onClick={()=>$this.chooseQuestionType('multiple-choice')} className="btn question-type-selection-option">
                    <div className="question-type-selection-option-icon"><span className="glyphicon glyphicon-star-empty"></span></div>
                    <div className="question-type-selection-option-text">Multiple Choice</div>
                </div>
                <div onClick={()=>$this.chooseQuestionType('text')} className="btn  question-type-selection-option">
                    <div className="question-type-selection-option-icon"><span className="glyphicon glyphicon-font"></span> </div>
                    <div className="question-type-selection-option-text">Text response</div>
                </div>
                <div onClick={()=>$this.chooseQuestionType('video')} className="btn  question-type-selection-option">
                    <div className="question-type-selection-option-icon"><span className="glyphicon glyphicon-facetime-video"></span> </div>
                    <div className="question-type-selection-option-text">Video response</div>
                </div>
                <div onClick={()=>$this.chooseQuestionType('audio')} className="btn question-type-selection-option">
                    <div className="question-type-selection-option-icon"><span className="glyphicon glyphicon-volume-up"></span> </div>
                    <div className="question-type-selection-option-text">Audio response</div>
                </div>
                <div onClick={()=>$this.chooseQuestionType('code')} className="btn question-type-selection-option">
                    <div className="question-type-selection-option-icon"><span className="glyphicon glyphicon-console"></span> </div>
                    <div className="question-type-selection-option-text">Code response</div>
                </div>
            </div>
        );

        this.stepInstructions=[
            {
                headingTitle:"Populate your Assessment",
                render:function() {
                    return (
                        <div className="col-lg-12">
                            <h1>Add Questions to your assessment</h1>
                            <div className="assessment-questions-container">
                                <div className="assessment-questions-container-title">0 Questions</div>
                                <div className="assessment-questions-container-body">
                                    <span onClick={()=>{$this.NextStep()}} className="btn"><span className="glyphicon glyphicon-plus"></span> Add new question</span>
                                </div>
                            </div>
                        </div>);
                }
            },
            {
                headingTitle:"Pick a Question",
                render:function(){
                    return(
                        <div className="col-lg-12">

                            <div className="assessment-top-title col-lg-12">
                                <span className="assessment-top-title-text">Select components to build your Assessment</span>
                                <span className="btn"><span className="glyphicon glyphicon glyphicon-time"/><span className="assessment-top-title-time-allowed">Time Allowed</span></span>
                                <span className="btn"><span className="glyphicon glyphicon glyphicon glyphicon-remove"/><span className="assessment-top-title-set-expiration">Set Expiration</span></span>
                            </div>
                            <div className="col-lg-12">
                                {$this.SideBar}
                                <div className="col-lg-11">
                                    <div className="col-lg-12">
                                        {$this.questionSelection}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 bottomBar">
                            <span className="assessment-steps-highlight">
                                <span className="active">Step 1</span>
                                <span className="">Step 2</span>
                                <span className="">Step 3</span>
                            </span>
                            </div>
                        </div>);
                }
            },
            {
                headingTitle:"Populate Question",
                render:function(){
                    return (
                        <div>
                            {$this.questionTypes[$this.state.selection]}
                            <div className="col-lg-12 bottomBar">
                            <span className="assessment-steps-highlight">
                                <span className="">Step 1</span>
                                <span className="active">Step 2</span>
                                <span className="">Step 3</span>
                                <div className="btn" onClick={()=>{$this.setState({step:3})}}>Next</div>
                            </span>
                            </div>
                        </div>
                    )

                }
            },
            {
                headingTitle:"More?",
                render:function(){
                    return (
                        <div>
                            <div onClick={()=>{$this.setState({step:1})}} className="btn">More?</div>
                            <div onClick={$this.NextStep()} className="btn">Done?</div>
                        </div>
                    )

                }
            },
            {
                headingTitle:"Review Assessment",
                render:function(){
                    return (
                        <div>
                            <Questions />
                            <div>
                                <div onClick={()=>{$this.setState({step:1})}} className="btn">More?</div>
                                <div onClick={$this.NextStep()} className="btn">Done?</div>
                            </div>
                        </div>
                    )
                }
            },
            {
                //urlRoute:"/assessment"
            }

        ];

    }
    chooseQuestionType(selectionChoicen){
        this.setState({selection:selectionChoicen,"step":2});
    }
    NextStep(){
        this.setState({"step":this.state.step+1});
    }
    render() {

        if(typeof this.stepInstructions[this.state.step]["urlRoute"] != "undefined"){
            //document.location=this.stepInstructions[this.state.step]["urlRoute"];
            return (<div></div>)
        }
        //this.props.OnRequestApp().setHeadingTitle(this.stepInstructions[this.state.step].headingTitle);



        /*******************************************************************/
        return (<div>{this.stepInstructions[this.state.step].render()}</div>);
    }


}







export default Assessment;
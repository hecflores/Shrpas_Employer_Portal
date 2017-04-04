import React from "react";
import $ from "jquery";
import QuestionTypes from "./QuestionTypes.jsx";

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




/***************************************************************************/
/* Question                                                                */
/***************************************************************************/
class Question extends React.Component{

    constructor(props) {

        super(props);
        this.state={
            answered:props.answered
        };
        this.delete=this.delete.bind(this);

        this.questionTypes=
            {
                'code': (
                    <CodeQuestionDisplay question={this.props.question}/>

                 
                ),
                'text': (
                    <TextQuestionDisplay question={this.props.question}/>

                   
                ),
                'audio': (
                    <AudioQuestionDisplay question={this.props.question}/>

                   
                ),
                'video': (
                    <VideoQuestionDisplay question={this.props.question}/>

            
                ),
                'multiple-choice': (
                    <MultipleChoiceDisplay question={this.props.question}/>

                    
                )
            };



    }
    delete(){
        var $this=this;
        $.ajax({
            method:'DELETE',
            url:"/rest/questions/"+this.props.question.id
        }).done(function(){
            location.reload();
        });
    }
    render() {

        /*******************************************************************/
        var questionType=(<div className="col-lg-12">Unknown Type <b>{this.props.question.type}</b></div>);
        if(typeof this.questionTypes[this.props.question.type]!='undefined')
        {
            questionType=this.questionTypes[this.props.question.type];
        }
        console.log("I'm rendering");

        /*******************************************************************/
        return (
            <div className='col-lg-12 question-item' style={{borderRadius:'10px',padding:'10px',margin:'5px',boxShadow:'0px 1px 3px black'}} >
                {questionType}

            </div>
        )

    }

}

export default Question;






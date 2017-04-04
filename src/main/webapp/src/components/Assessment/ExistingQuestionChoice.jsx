import React from "react";
import $ from "jquery";

/**
 * @class ExistingQuestionChoice
 * @description Renders a single answer choice if the question is a multiple choice question
 */
class ExistingQuestionChoice extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <span className="col-lg-6">
                <b className="choice-letter">{this.props.choice.letter}:</b>
                <span className="choice-text">{this.props.choice.text}</span>
            </span>
        );
    }
}

export default ExistingQuestionChoice;
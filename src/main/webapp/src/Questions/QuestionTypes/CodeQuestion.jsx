import React from 'react';
import Popup from 'react-popup';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Modal from 'react-modal';

import GenericQuestion from './GenericQuestion.jsx';
/***************************************************************************/
/* Question(Code Question) - Create                                        */
/***************************************************************************/
class CodeQuestionCreator extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {

        return (
            <GenericQuestion props={this.props} active={this}>
                <h3>Code</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="questionEntered3">Question</label>
                        <input type="text" className="form-control" id="questionEntered3"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="codeContent">Code</label>
                        <textarea  className="form-control" id="codeContent"/>
                    </div>
                </form>
            </GenericQuestion>);
    }
}

/***************************************************************************/
/* Question(Code Question) - Display                                       */
/***************************************************************************/
class CodeQuestionDisplay extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="col-lg-12">
                <pre>{this.props.question.content.code}</pre>
                <p>{this.props.question.number}. {this.props.question.content.question}</p>
            </div>)

    }
}
export default
{
        Creator:CodeQuestionCreator,
        Display:CodeQuestionDisplay
};
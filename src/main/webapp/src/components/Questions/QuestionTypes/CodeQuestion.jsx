import React from 'react';
import Popup from 'react-popup';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Modal from 'react-modal';

import GenericQuestion from './GenericQuestion.jsx';
/***************************************************************************/
/* Question(Code Question) - Create                                        */
/***************************************************************************/
class CodeQuestionCreator extends GenericQuestion {

    constructor(props) {
        super(props);
        this.buildContent=this.buildContent2.bind(this);
        this.active=this;
        this.state={question : "Default Coding Question"};
    }
    buildContent2(){
        return {
            type:'code',
            content:JSON.stringify(this.state)
        };
    }
    render() {

        return (
            <GenericQuestion active={this} onCreatedNewQuestion={()=>this.props.onCreatedNewQuestion()} props={this.props}>
           
                <form>
                    <div className="form-group">
                        
                        <input value={this.state.question}  onChange={(event)=>this.saveInput('question',event.target.value)} type="text" className="form-control" id="questionEntered2"/>
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
                <h3>Code</h3>
                <h2>{this.props.question.ID}. {this.props.question.content.question}</h2>
            </div>)

    }
}
export default
{
        Creator:CodeQuestionCreator,
        Display:CodeQuestionDisplay
};
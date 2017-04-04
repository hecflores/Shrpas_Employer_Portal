import React from 'react';
import Popup from 'react-popup';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Modal from 'react-modal';
import GenericQuestion from './GenericQuestion.jsx';

/***************************************************************************/
/* Question(Multiple Choice)                                               */
/***************************************************************************/
class MultipleChoiceQuestion extends GenericQuestion {

    constructor(props) {
        super(props);
        this.buildContent=this.buildContent2.bind(this);
        this.active=this;
    }
    buildContent2(){
        return {
                  type:'multiple-choice',
                  question:this.getInput('question')
               };
    }
    render() {

        return (
            <GenericQuestion props={this.props} active={this}>
                <h3>Multiple Choice</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="questionEntered">Question</label>
                        <input value={this.getInput('question')} onChange={(event)=>this.saveInput('question',event.target.value)} type="text" className="form-control" id="questionEntered"/>
                    </div>
                    <span className="btn btn-primary btn-lg">Add Choice</span>
                </form>
            </GenericQuestion>);
    }
}

export default MultipleChoiceQuestion;
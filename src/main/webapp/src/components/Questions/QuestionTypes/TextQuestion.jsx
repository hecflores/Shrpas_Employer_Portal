import React from 'react';
import Popup from 'react-popup';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Modal from 'react-modal';
import GenericQuestion from './GenericQuestion.jsx';

/***************************************************************************/
/* Question(Text Question)                                               */
/***************************************************************************/
class TextQuestionCreator extends GenericQuestion {

    constructor(props) {
        super(props);
        this.buildContent=this.buildContent2.bind(this);
        this.active=this;
        this.state={question: "Default Text Question"};

    }
    buildContent2(){
        return {
            type:'text',
            content:JSON.stringify(this.state)
        };
    }
    render() {
        console.log(this)
        return (
            <GenericQuestion active={this} onCreatedNewQuestion={()=>this.props.onCreatedNewQuestion()} props={this.props}>
               
                <form>
                    <div className="form-group">

                        <input value={this.state.question} onChange={(event)=>this.saveInput('question',event.target.value)} type="text" className="form-control" id="questionEntered2"/>
                    </div>
                </form>
            </GenericQuestion>);
    }
}

/***************************************************************************/
/* Question(Text Question)                                               */
/***************************************************************************/
class TextQuestionDisplay extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="col-lg-12">
                <h3>Text Question</h3>
                <h2>{this.props.question.ID}. {this.props.question.content.question}</h2>
                <h4>Hint: {this.props.question.hint}</h4> {/*sean added this line*/}
            </div>);
    }
}

export default {
    Creator:TextQuestionCreator,
    Display:TextQuestionDisplay,
};
import React from 'react';
import Popup from 'react-popup';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Modal from 'react-modal';


/***************************************************************************/
/* Question(Multiple Choice)                                               */
/***************************************************************************/
class GenericQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.active=this;
        this.buildContent=this.buildContent2.bind(this);
        this.state={inputs:{},content:{}};
        this.saveQuestionContent=this.saveQuestionContent.bind(this);
    }
    buildContent2(){
        return {};
    }
    saveInput(inputName, inputContent)
    {
        var newState={};
        newState[inputName]=inputContent;
        this.setState(newState);
    }
    getInput(inputName)
    {
        if(typeof this.state[inputName] == 'undefined'){
            this.saveInput(inputName,'Unkown');
        }
        return this.state[inputName];
    }
    saveQuestionContent(callback) {
        var $this=this;
        $.ajax({
            method: "POST",
            url: '/api/questions',
            data: JSON.stringify(this.props.active.buildContent()),
            dataType: "json",
            contentType:'application/json'
        }).done(function (msg) {
            $this.props.onCreatedNewQuestion();
            callback();
        });

    }

    render() {
        var className="";
        if(this.props.props.isTab){
            className="tab-pane fade";
            if(this.props.props.isActive){
                className="tab-pane fade in active";
            }
        }

        return (
            <div id={this.props.props.id} className={className}>
                {this.props.children}
                <div>
                    <span className="pull-right">
                        <button type="button" onClick={this.saveQuestionContent} className="btn btn-success">Create</button>
                    </span>
                </div>
            </div>);
    }
}
GenericQuestion.defaultProps={
    onCreatedNewQuestion:function(){}
};
export default GenericQuestion;
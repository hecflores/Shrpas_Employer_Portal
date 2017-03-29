import React from 'react';
import Popup from 'react-popup';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Modal from 'react-modal';
import HintsDropdown from '../Hints.jsx'
import Rests from "../../../libaries/Rest.jsx";

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
        this.hintChanged=this.hintChanged.bind(this);
    }
    hintChanged(hasHint,hint){
        this.props.active.setState({hasHint:hasHint,hint:hint});
    }
    componentDidMount(){
        if(typeof this.props.props!="undefined")
        {
            if (typeof this.props.props.eventHandler != "undefined") {
                var $this = this;

                this.props.props.eventHandler.on("save-hint", function (e) {
                  $this.props.active.setState({hasHint:e.hasHint, hint:e.hint});
                })
                this.props.props.eventHandler.on("save-question", function (e) {

                    /***********************************************************/
                    $this.props.props.eventHandler.trigger("save-question", "started", {question: this});

                    /***********************************************************/
                    $this.saveQuestionContent(function (data) {
                        if(data.failed){
                            $this.props.props.eventHandler.trigger("save-question", "error", {question: this, data: data});
                            return;
                        }
                        $this.props.props.eventHandler.trigger("save-question", "finished", {question: this, data: data});
                    });

                });
            }
        }
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
        var $this = this;

        Rests.Lets().post(
            '/rest/questions',

            $.extend(this.props.active.buildContent(),{hasHint:this.props.active.state.hasHint,
                hint:this.props.active.state.hint}),

            function (data) {
                    $this.props.onCreatedNewQuestion();
                    (typeof callback == "function")?callback(data):true;
                }

        );
        // $.ajax({
        //     method: "POST",
        //     url: '/rest/questions',
        //     data: JSON.stringify(
        //         $.extend(this.props.active.buildContent(),{hasHint:this.props.active.hasHint,
        //         hint:this.props.active.hint})),
        //     dataType: "json",
        //     contentType:'application/json'
        // }).done(function (data) {
        //     $this.props.onCreatedNewQuestion();
        //     (typeof callback == "function")?callback(data):true;
        // }).fail(function (jqXHR,textStatus,errorThrown) {
        //     (typeof callback == "function")?callback({failed:true,error:{jqXHR:jqXHR,textStatus:textStatus,errorThrown:errorThrown}}):true;
        // });;

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
            <div id={this.props.props.id} className="question-container">

                {this.props.children}
                <div className="hint-container">
                    <HintsDropdown eventHandler = {this.props.props.eventHandler} hasHint={this.props.active.state.hasHint} hint={this.props.active.state.hint} />
                </div>
                {this.props.props.noCreateBtn?"":(
                        <div>
                    <span className="pull-right">
                        <button type="button" onClick={this.saveQuestionContent} className="btn btn-default">Create</button>
                    </span>
                        </div>)}
            </div>);
    }
}
GenericQuestion.defaultProps={
    onCreatedNewQuestion:function(){}
};
export default GenericQuestion;

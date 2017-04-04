import React from 'react';
import Popup from 'react-popup';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Modal from 'react-modal';

import QuestionTypes from './QuestionTypes.jsx';

const MultipleChoiceDisplay=QuestionTypes.MultipleChoiceQuestion.Display;
const MultipleChoiceCreator=QuestionTypes.MultipleChoiceQuestion.Creator;
const CodeQuestionDisplay=QuestionTypes.CodeQuestion.Display;
const CodeQuestionCreator=QuestionTypes.CodeQuestion.Creator;

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

/***************************************************************************/
/* Question Status                                                         */
/***************************************************************************/
class QuestionStatus extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (<span className="label label-primary">{this.props.status}</span>);
    }
}

/***************************************************************************/
/* Question Type                                                           */
/***************************************************************************/
class QuestionType extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<span className="label label-primary">{this.props.type}</span>);
    }

}

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
                    <CodeQuestionDisplay question={this.props.question}>

                    </CodeQuestionDisplay>
                ),
                'multiple-choice': (
                    <MultipleChoiceDisplay question={this.props.question}>

                    </MultipleChoiceDisplay>
                )
            };



    }
    delete(){
        var $this=this;
        $.ajax({
            method:'DELETE',
            url:this.props.question._links.self.href
        }).done(function(){
            $this.props.parent.updateTable();
        });
    }
    render() {

        /*******************************************************************/
        var questionType=(<div className="col-lg-12">Unkown Type <b>{this.props.question.type}</b></div>);
        if(typeof this.questionTypes[this.props.question.type]!='undefined')
        {
            questionType=this.questionTypes[this.props.question.type];
        }

        /*******************************************************************/
        return (
            <div className='col-lg-12' style={{borderRadius:'10px',padding:'10px',margin:'5px',boxShadow:'0px 1px 3px black'}} >
                {questionType}
            </div>
        )
    }
}





/***************************************************************************/
/* Questions                                                                */
/***************************************************************************/
class Questions extends React.Component{

    constructor(props) {
        super(props);

        this.closeCreateQuestions = this.closeCreateQuestions.bind(this);
        this.openCreateQuestions = this.openCreateQuestions.bind(this);
        this.nextPage=this.nextPage.bind(this);
        this.prevPage=this.prevPage.bind(this);
        this.firstPage=this.firstPage.bind(this);
        this.lastPage=this.lastPage.bind(this);

        this.state={
            questions:[],
            currentPage:0,
            pageSize:20,
            totalElements:0,
            totalPages:0,
            number:0,
            next:null,
            prev:null,
            last:null,
            first:null
        };
    }
    buildLink(link){
        if(typeof link == 'undefined')
        {
            return '/api/questions?page='+this.state.number+"&"+this.state.pageSize
        }

        return link;
    }
    updateTable(link)
    {
        /*******************************************************************/
        var $this=this;

        /*******************************************************************/
        $.get($this.buildLink(link),function(data){

            if($this.state.creatingNewQuestion){
                return;
            }

            data._embedded.questions.content=data._embedded.questions.map(function(question){
                question.content=JSON.parse(question.content);
                if(question.content==null){
                    question.content={question:"Broke",choices:[]};
                }
                if(typeof question.content["choices"] == 'undefined'){
                    question.content["choices"]=[];
                }
                return question;
            });
            $this.setState(
                {
                    questions:data._embedded.questions,
                    totalElements:data.page.totalElements,
                    totalPages:data.page.totalPages,
                    pageSize:data.page.size,
                    number:data.page.number,
                    next:(data._links?data._links.next:null),
                    prev:(data._links?data._links.prev:null),
                    last:(data._links?data._links.last:null),
                    first:(data._links?data._links.first:null),
                    creatingNewQuestion:false
                });
        });
    }
    componentDidMount() {
        var $this=this;
        var startUpdate;
        startUpdate=function(){
            setTimeout(function() {
                $this.updateTable(startUpdate);
            },1000);
        }

        startUpdate();



    }
    closeCreateQuestions(){
        this.setState({creatingNewQuestion:false});
    }
    openCreateQuestions(){
        this.setState({creatingNewQuestion:true});

    }
    nextPage(){
        this.updateTable(this.state.next.href);
    }
    prevPage(){
        this.updateTable(this.state.prev.href);
    }
    firstPage(){
        this.updateTable(this.state.first.href);
    }
    lastPage(){
        this.updateTable(this.state.last.href);
    }
    render() {
        var parent=this;
        const questions = this.state.questions.map(function(question,index){
            question.ID=index+(parent.state.number*parent.state.pageSize);
            return <Question key={index} question={question} parent={parent}/>
        });
        return (
            <div>
                <div className="container">
                    <div className="well col-lg-12">
                        <div className="col-lg-4 text-left">
                            <div><b>{this.state.totalPages} Pages</b></div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div><b>{this.state.totalElements} Elements</b></div>
                        </div>
                        <div className="col-lg-4 text-right">
                            <div><div onClick={this.openCreateQuestions} className="btn btn-success">Add</div></div>
                        </div>
                    </div>
                    <div className="well col-lg-12">
                        {questions}
                    </div>
                    <div className="well col-lg-12">
                        <div className="col-lg-4 text-left">
                            {this.state.first != null &&
                            <span onClick={this.firstPage} className="btn btn-primary">First</span>
                            }
                            {this.state.last != null &&
                            <span onClick={this.prevPage} className="btn btn-default">Previous</span>
                            }
                        </div>

                        <div className="col-lg-4 text-center"><b>Current Page({this.state.number})</b></div>
                        <div className="col-lg-4 text-right">
                            {this.state.next != null &&
                            <span onClick={this.nextPage} className="btn btn-default">Next</span>
                            }
                            {this.state.last != null &&
                            <span onClick={this.lastPage} className="btn btn-primary">Last</span>
                            }

                        </div>
                    </div>

                </div>
                <Modal isOpen={this.state.creatingNewQuestion}>
                    <h2 ref="subtitle">Create A Question</h2>
                    <ul className="nav nav-tabs nav-justified">
                        <li className="active"><a data-toggle="tab" href="#multipleChoice">Multiple Choice</a></li>
                        <li><a data-toggle="tab" href="#question">Question</a></li>
                        <li><a data-toggle="tab" href="#video">Video</a></li>
                        <li><a data-toggle="tab" href="#code">Code</a></li>
                    </ul>

                    <div className="tab-content">
                        <MultipleChoiceCreator id="multipleChoice" isTab="true" isActive="true"/>
                        {/*<QuestionTypes.TextQuestion id="question" isTab="true"/>*/}
                        {/*<QuestionTypes.VideoQuestion id="video" isTab="true"/>*/}
                        <CodeQuestionCreator id="code" isTab="true"/>
                    </div>

                    <div>
                        <span className="pull-right">
                            <button type="button" onClick={this.closeCreateQuestions} className="btn btn-danger">Close</button>
                        </span>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default Questions;
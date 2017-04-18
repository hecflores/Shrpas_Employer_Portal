import React from 'react';
import Question from 'components/Questions/Question/Question.jsx';


/***************************************************************************/
/* Questions                                                                */
/***************************************************************************/
class Questions extends React.Component{

    constructor(props) {
        super(props);
<<<<<<< HEAD
=======

        this.closeCreateQuestions = this.closeCreateQuestions.bind(this);
        this.openCreateQuestions = this.openCreateQuestions.bind(this);
        this.nextPage=this.nextPage.bind(this);
        this.prevPage=this.prevPage.bind(this);
        this.firstPage=this.firstPage.bind(this);
        this.lastPage=this.lastPage.bind(this);

        this.state={
            questions:this.props.questions,
            currentPage:0,
            pageSize:20,
            totalElements:0,
            totalPages:0,
            number:0,
            next:null,
            prev:null,
            last:null,
            first:null,
            creatingNewQuestion: false,
            addingNewQuestion: false,
            addingExistingQuestion: false
        };
    }
    buildLink(link){
        if(typeof link == 'undefined')
        {
            return '/rest/questions?page='+this.state.number+"&"+this.state.pageSize
        }

        return link;
    }
    updateTable(link)
    {
        //Not Doing this any-more
        // /*******************************************************************/
        // var $this=this;
        //
        // /*******************************************************************/
        // $.get($this.buildLink(link),function(data){
        //
        //     if($this.state.creatingNewQuestion){
        //         return;
        //     }
        //
        //     data._embedded.questions.content=data._embedded.questions.map(function(question){
        //         question.content=JSON.parse(question.content);
        //         if(question.content==null){
        //             question.content={question:"Broke",choices:[]};
        //         }
        //         if(typeof question.content["choices"] == 'undefined'){
        //             question.content["choices"]=[];
        //         }
        //         return question;
        //     });
        //     $this.setState(
        //         {
        //             questions:data._embedded.questions,
        //             totalElements:data.page.totalElements,
        //             totalPages:data.page.totalPages,
        //             pageSize:data.page.size,
        //             number:data.page.number,
        //             next:(data._links?data._links.next:null),
        //             prev:(data._links?data._links.prev:null),
        //             last:(data._links?data._links.last:null),
        //             first:(data._links?data._links.first:null),
        //             creatingNewQuestion:false
        //         });
        // });
    }
    componentDidMount() {

        //Not Doing this anymore
        // var $this=this;
        // var startUpdate;
        // startUpdate=function(){
        //     setTimeout(function() {
        //         $this.updateTable();
        //         //startUpdate();
        //     },1000);
        // }
        //
        // startUpdate();



>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
    }

    render() {
        return (
            <div ref="Questions">
                {this.props.questions.map(function(question,index){
                    return (<div className="questions-item" key={question.id}>
                                <div className="question-side-bar">
                                    <img src="/resources/static/img/icons/side-thing.png"/>
                                </div>
                                <div className="question-number">{(index+1)+"."}</div>
                                <div className="question">

                                    <Question Type={question.type} Question={question} Renderer={Question.Renders.Display}/>

                                </div>
                            </div>);
                })}
            </div>
        )
    }
}
export default Questions;
import React from 'react';
import GenericQuestion from './GenericQuestion.jsx';

class AnswerChoice extends React.Component
{
    constructor(props) {
        super(props);

        this.state={choice:this.props.choice,changingText:false,changingTextTo:""};

        this.startEditing=this.startEditing.bind(this);
        this.setEditingText=this.setEditingText.bind(this);
        this.cancelEditing=this.cancelEditing.bind(this);
        this.saveEditing=this.saveEditing.bind(this);
    }
    getId(){
        return this.props.id;
    }
    getChoice(){
        return this.props.choice;
    }


    startEditing(){
        this.setState({changingText:true,changingTextTo:this.state.choice.text});
    }
    setEditingText(event){
        this.setState({changingTextTo:event.target.value});
    }
    cancelEditing(event){
        this.setState({changingText:false});
    }
    saveEditing(){

        /*******************************************************************/
        var oldChoice=this.state.choice;
        oldChoice.text=this.state.changingTextTo;

        /*******************************************************************/
        var $this=this;
        this.setState({changingText: false, choice: oldChoice});
    }

    renderEditableVersion()
    {
        /*******************************************************************/
        if(this.state.changingText)
        {
            return this.renderEditingVersion();
        }

        /*******************************************************************/
        var $this=this;
        return (

            <div className="multiple-choice-answer-choice-editable-mode-container" >
                <div className='multiple-choice-answer-choice-details-container'>
                    <span onClick={this.startEditing} className="answer-choice answer-choice-editable"><b className="choice-letter">{this.props.letter}. </b><span className="choice-text">{this.props.choice.text}</span></span>
                </div>
                <div className="choice-delete-btn-container">
                    <span className="choice-delete-btn-holder">
                        <span onClick={(event)=>this.props.onAnswerDelete($this)} className="choice-delete-btn">Delete</span>
                    </span>
                </div>
            </div>);
    }
    renderEditingVersion()
    {
        var $this=this;
        return (
            <div className="multiple-choice-answer-choice-editing-mode-container">
                <form className="form-inline">
                    <div style={{marginRight:'30px'}}  className="input-group mb-2 mr-sm-2 mb-sm-0 multiple-choice-answer-choice-details-container">
                        <div className="input-group-addon"><b className="choice-letter">{this.props.letter}.</b></div>
                        <input onChange={this.setEditingText} value={this.state.changingTextTo} type="text" className="form-control choice-text" id="anserInput"/>
                    </div>
                    <button onClick={this.saveEditing} type="button" className="btn btn-success choice-save-button">Save</button>
                    <button onClick={this.cancelEditing} type="button" className="btn btn-danger choice-cancel-button">Cancel</button>
                </form>
            </div>);
    }
    renderNormalVersion()
    {
        var $this=this;
        return (
            <div className="multiple-choice-answer-choice-container" >

                <span className="multiple-choice-answer-choice"><b className="choice-letter">{this.props.letter}. </b><span className="choice-text"> {this.props.choice.text}</span></span>

            </div>)
    }

    render()
    {

        var body=this.renderNormalVersion();
        if(this.props.editible){
            body=this.renderEditableVersion();
        }

        var $this=this;
        var classForFirstPart='col-lg-10';
        if(!this.props.editible)
        {
            classForFirstPart='';
        }
        return (



            <div className="answer-choice-main-container" >
                {body}
            </div>
        )
    }

}
class AnswerChoices extends React.Component
{
    // defaultProps={
    //     onAnswersChanged:function(choices){
    //
    //     },
    //
    //     choices:[],
    //     editible:false
    // };

    constructor(props) {
        super(props);

        this.state={choices:this.props.choices};
        this.triggerAnswersChanged=this.triggerAnswersChanged.bind(this);
        this.deleteAnswer=this.deleteAnswer.bind(this);
    }
    getChoices(){
        return this.state.choices;
    }
    deleteAnswer(answerChoice){
        var $this=this;
        var myChoices=this.state.choices;
        delete myChoices[answerChoice.getId()];
        if(typeof myChoices=='undefined'){
            myChoices=[];
        }
        this.setState({choices: myChoices});
    }
    triggerAnswersChanged(answerChoice){
        var $this=this;
        var myChoices=this.state.choices;
        myChoices[answerChoice.getId()]=answerChoice.getChoice();
        this.setState({choices: myChoices});

    }
    render() {
        /*******************************************************************/
        const $this=this;
        const letters=['A','B','C','D','E','F','G','H'];

        if(typeof this.getChoices() != "undefined"){
            console.log(this.state.choices);
        }
        const questions=this.getChoices().map(function(answerChoice,index){
            var letter=letters[index%letters.length];
            return (
                <AnswerChoice choice={answerChoice} onAnswerDelete={$this.deleteAnswer} editible={$this.props.editible} key={index} id={index} letter={letter} onAnswerChanged={$this.triggerAnswersChanged}>
                </AnswerChoice>
            );

        });

        /*******************************************************************/
        return (
                <div className="multiple-choice-choices-container">
                    {questions}
                    {this.props.appendComponent}
                </div>
        );
    }

}

/***************************************************************************/
/* Question(Multiple Choice) - Creator                                     */
/***************************************************************************/
class MultipleChoiceQuestionCreator extends GenericQuestion {

    constructor(props) {
        super(props);

        /*******************************************************************/
        this.buildContent=this.buildContent2.bind(this);
        this.updateChoices=this.updateChoices.bind(this);
        this.addChoice=this.addChoice.bind(this);
        this.active=this;

        /*******************************************************************/
        this.state={question:'Unknown',choices:[{'text':'Unknown','letter':'A'}]};

    }
    buildContent2(){
        return {
                  type:'multiple-choice',
                  content:JSON.stringify(this.state)
               };
    }
    addChoice(){
        const letters=['A','B','C','D','E','F','G','H']
        var myChoices=this.state.choices;
        myChoices.push({text:"Unknown",letter:letters[myChoices.length%letters.length]});
        this.setState({choices:myChoices});

        /*******************************************************************/
        /* Allow Others to grab question content                           */
        /*******************************************************************/
        this.props.onChanged?this.props.onChanged(this.buildContent()):true;
    }
    updateChoices(choices){
        var myChoices=this.state.choices;
        myChoices=choices.getChoices();
        this.setState({choices:myChoices});

        /*******************************************************************/
        /* Allow Others to grab question content                           */
        /*******************************************************************/
        this.props.onChanged?this.props.onChanged(this.buildContent()):true;
    }
    render() {



        return (

            <GenericQuestion onCreatedNewQuestion={()=>this.props.onCreatedNewQuestion()} props={this.props} active={this}>
                
                <form>
                    <input value={this.state.question} onChange={(event)=>this.saveInput('question',event.target.value)} type="text" className="form-control multiple-choice-question-input" id="questionEntered2"/>
                </form>
                <AnswerChoices choices={this.state.choices} onAnswersChanged={this.updateChoices} editible="true" appendComponent={(<div onClick={this.addChoice}  className="multiple-choice-add-choice-container" >
                    <span className="multiple-choice-add-choice-btn ">Add Answer</span>
                </div>)}/>

            </GenericQuestion>);
    }
}
MultipleChoiceQuestionCreator.defaultProps={
    onCreatedNewQuestion:function(){}
}
/***************************************************************************/
/* Question(Multiple Choice) - Display                                     */
/***************************************************************************/
class MultipleChoiceQuestionDisplay extends GenericQuestion {

    constructor(props) {
        super(props);
        this.active=this;
    }

    render() {

        /*******************************************************************/
        return (
            <div className="col-lg-12">
                <h3>Multiple Choice Question</h3>
                <h2>{this.props.question.ID}. {this.props.question.content.question}</h2>
                <AnswerChoices choices={this.props.question.content.choices}/>
                <h4>Hint: {this.props.question.hint}</h4> {/*sean added this line*/}
            </div>);
    }
}

export default {
        Creator:MultipleChoiceQuestionCreator,
        Display:MultipleChoiceQuestionDisplay,
};
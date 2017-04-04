import React from 'react';
import Popup from 'react-popup';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Modal from 'react-modal';
import Audio from '../../Prototype/Audio.jsx';

import GenericQuestion from './GenericQuestion.jsx';
/***************************************************************************/
/* Question(Audio Question)                                               */
/***************************************************************************/
class AudioQuestionCreator extends GenericQuestion {

    constructor(props)
    {
        super(props);
        this.buildContent=this.buildContent2.bind(this);

        this.state={question:'Instructions for audio question'};
    }
    buildContent2()
    {
        return {
            type:'audio',
            content:JSON.stringify(this.state)
        };
    }
    render()
    {

        return (
            <GenericQuestion active={this} onCreatedNewQuestion={()=>this.props.onCreatedNewQuestion()} props={this.props}>
              
                <form>
                    <div className="form-group">
                    
                        <input value={this.state.question} onChange={(event)=>this.saveInput('question',event.target.value)} type="text" className="form-control" id="questionEntered2"/>
                        {/*<button onClick={this.stopRecording} value="Stop Recording"/>*/}
                    </div>
                </form>
            </GenericQuestion>);
    }
}

AudioQuestionCreator.defaultProps={
    onCreatedNewQuestion:function () {}
}
/***************************************************************************/
/* Question(Audio Question)                                               */
/***************************************************************************/
class AudioQuestionDisplay extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {

        return (
          <div className="col-lg-12">
              <h3>Audio Question</h3>
              <h2>{this.props.question.ID}. {this.props.question.content.question}</h2>
              <h4>Hint: {this.props.question.hint}</h4> {/*sean added this line*/}
          </div>);
    }
}
export default {
    Creator:AudioQuestionCreator,
    Display:AudioQuestionDisplay
};

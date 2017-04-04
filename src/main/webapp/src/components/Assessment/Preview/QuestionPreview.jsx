import React from 'react';
import MultipleChoiceQuestionPreview from './MultipleChoiceQuestionPreview.jsx';
import TextQuestionPreview from './TextQuestionPreview.jsx';
import CodeQuestionPreview from './CodeQuestionPreview.jsx';
import AudioQuestionPreview from './AudioQuestionPreview.jsx';
import VideoQuestionPreview from './VideoQuestionPreview.jsx';

class QuestionPreview extends React.Component {
    constructor(props) {
        super(props);

        this.questionTypes=
            {
                'code': (
                    <CodeQuestionPreview content={this.props.question.content} id={this.props.id} key={this.props.id}/>
                ),
                'text': (
                    <TextQuestionPreview content={this.props.question.content} id={this.props.id} key={this.props.id}/>
                ),
                'audio': (
                    <AudioQuestionPreview content={this.props.question.content} id={this.props.id} key={this.props.id}/>
                ),
                'video': (
                    <VideoQuestionPreview content={this.props.question.content} id={this.props.id} key={this.props.id}/>
                ),
                'multiple-choice': (
                    <MultipleChoiceQuestionPreview content={this.props.question.content} id={this.props.id} key={this.props.id}/>
                )
            };

    }

    render() {

        return (
            <div className='col-lg-12' style={{borderRadius:'10px',padding:'10px',margin:'5px',boxShadow:'0px 1px 3px black'}} >
                {this.questionTypes[this.props.question.type]}
            </div>
        )
    }
}

export default QuestionPreview;
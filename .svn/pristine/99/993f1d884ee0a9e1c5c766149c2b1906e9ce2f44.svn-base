import React from 'react';
import GenericQuestion from './GenericQuestion.jsx';
import Video from '../../Prototype/Video.jsx';
/***************************************************************************/
/* Question(Video Question)                                               */
/***************************************************************************/
class VideoQuestionCreator extends GenericQuestion {

    constructor(props) {
        super(props);
        this.buildContent=this.buildContent2.bind(this);
        this.active=this;

        this.state={question:'Instructions for video question', showVideo: false};
        this.addVideo = this.addVideo.bind(this);
        // this.state={question:'Enter your question here', recordRTC: {}, mediaConstraints: {video: true, audio: true}};
        // navigator.mediaDevices.getUserMedia(this.state.mediaConstraints).then(this.successCallback).catch(this.errorCallback);
    }
    buildContent2(){
        return {
            type:'video',
            content:JSON.stringify(this.state)
        };
    }

    addVideo() {
        this.setState({
            showVideo: !this.state.showVideo,
        });
    }

    render() {

        var caption = this.state.showVideo ? "Hide Video" : "Add Video";
        return (
            <GenericQuestion onCreatedNewQuestion={()=>this.props.onCreatedNewQuestion()} props={this.props} active={this} >
             
                <form>
                    <div className="form-group">
                       
                        <input value={this.state.question} onChange={(event)=>this.saveInput('question',event.target.value)} type="text" className="form-control" id="questionEntered2"/>

                        <div className="col-lg-12" style={{margin:"5px"}}>
                            <span onClick={this.addVideo} className="btn btn-default">{caption}</span>
                            {this.state.showVideo ? <Video /> : null}
                        </div>
                    </div>
                </form>
            </GenericQuestion>);
    }

}
VideoQuestionCreator.defaultProps={
    onCreatedNewQuestion:function () {}
}
/***************************************************************************/
/* Question(Video Question)                                               */
/***************************************************************************/
class VideoQuestionDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.active=this;
    }

    render() {

        return (

            <div className="col-lg-12">
                <h3>Video Question</h3>
                <h2>{this.props.question.ID}. {this.props.question.content.question}</h2>
            </div>);
    }

}
export default {
    Creator:VideoQuestionCreator,
    Display:VideoQuestionDisplay
};
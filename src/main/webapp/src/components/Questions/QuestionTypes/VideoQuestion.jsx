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
                <h3>Video</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="questionEntered2">Question</label>
                        <input value={this.state.question} onChange={(event)=>this.saveInput('question',event.target.value)} type="text" className="form-control" id="questionEntered2"/>

                        <div className="col-lg-12" style={{margin:"5px"}}>
                            <span onClick={this.addVideo} className="btn btn-success">{caption}</span>
                            {this.state.showVideo ? <Video /> : null}
                        </div>
                    </div>
                </form>
            </GenericQuestion>);
    }


    // successCallback(stream){
    //     const options = {
    //         mimeType: 'video/webm',
    //         audioBitsPerSecond: 128000,
    //         videoBitsPerSecond: 128000,
    //         bitsPerSecond: 128000
    //     };
    //     recordRTC = RecordRTC(stream, options);
    //     recordRTC.startRecording();
    // }
    //
    // errorCallback(error){
    //     console.log(error);
    // }
    //
    // stopRecording() {
    //     recordRTC.stopRecording
    // }
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
        this.buildContent=this.buildContent.bind(this);
        this.active=this;
    }
    buildContent(){
        return {
            type:'video',
            content:JSON.stringify({question:this.getInput('question')})
        };
    }

    render() {

        return (

            <div className="col-lg-12">
                <h3>{this.props.question.ID}. {this.props.question.content.question}</h3>
            </div>);
    }

}
export default {
    Creator:VideoQuestionCreator,
    Display:VideoQuestionDisplay
};
import React from 'react';
import ParticipantAPI from '../../libaries/APIs/ParticipantAPI.jsx';
import ParticipantParser from "libaries/ParticipantParser.jsx";
import APIComponent from 'components/Containers/APIComponent.jsx';

export const ImportActualEmails=(props)=> {
    return <div className="input-emails-container">
        <label className="textbox-label">
            <b>Enter the text to import emails</b>
        </label><br/>

        {/**********************************/}
        {/* Input                          */}
        {/**********************************/}
        <textarea className="emails-textbox" type='text' placeholder="Enter the text" value={props.text}
                  onChange={props.handleChange}/><br/>
        <button className="parse-button" type='submit' onClick={props.startParsing}>Parse</button>

        {/**********************************/}
        {/* Parse Results                  */}
        {/**********************************/}
        {props.isParsing ?
            <ParticipantParserComponent Text={props.text}>
                {function (participants) {
                    return <button className="submit-emails-button" type='submit' onClick={() => {
                        props.change({participants: participants});
                        props.send()
                    }}>Add</button>
                }.bind(this)}
            </ParticipantParserComponent> :
            null}
    </div>
}



class Textbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            emailsArray: []
        };

        this.handleChange = this.handleChange.bind(this);       //Text Box Changes...
        this.startParsing = this.startParsing.bind(this);       //Start Parsing...
        this.addingFinished = this.addingFinished.bind(this);   //Finished Adding them...
    }


    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    startParsing(e) {
        this.setState({
            isParsing: true
        });
        e.preventDefault();
    }

    addingFinished(){
        this.setState({
            text: "",
            isParsing:false
        })
    }
    render() {
        return (<APIComponent  APIListener={ParticipantAPI.instance} Event={"add-participants"}>
                    {function(data,change,send, setData, isLoading)
                    {
                        return (<div className="import-emails">
                                <ImportActualEmails {...this} {...this.state} {...this.props} change={change} send={send} setData={setData} isLoading={isLoading}/>

                            {/***********************************************/}
                            {/* Adding Results                              */}
                            {/***********************************************/}
                            {data.participants?
                                <div className="adding-results">
                                    {data.participants.map(function(participant){
                                        return <div className="participant-adding-results" >
                                                  {"Name("+participant.name+"), Email("+participant.email+"), Phone("+participant.phone+")"}
                                               </div>
                                    })}
                                </div>:null
                            }
                        </div>)

                    }.bind(this)}
                </APIComponent>
        )
    }
}
Textbox.contextTypes={
    AssessmentID:React.PropTypes.number
};

class ParticipantParserComponent extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            results:{
                success:false
            }
        }



    }
    parse(props){
        let results=ParticipantParser.parseData(props.Text);

        /*******************************************************************/
        this.setState({
            results:results
        },function(){
            if(this.state.results.participants){
                this.props.onSuccess(this.state.results);
            }
        }.bind(this));
    }
    componentWillMount(){
        this.parse(this.props);
    }
    componentWillReceiveProps(props){
        this.parse(this.props);
    }
    render(){
        return this.state.results.participants?
            (<div className="import-results" >
                <div  className="results" dangerouslySetInnerHTML={{__html:this.state.results.html}}></div>
                {this.props.children(this.state.results.participants)}
            </div>):<div><h1 className="text-danger">No Participants</h1></div>;

    }
}
ParticipantParserComponent.propTypes={
    Text:React.PropTypes.string,
    onSuccess:React.PropTypes.func,
    children:React.PropTypes.func
};
ParticipantParserComponent.defaultProps={
    onSuccess:function(){}
};


export default Textbox;

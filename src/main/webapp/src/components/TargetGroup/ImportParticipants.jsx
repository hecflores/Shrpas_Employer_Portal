import React from 'react';
import TargetGroupAPI from '../../libaries/APIs/TargetGroupAPI.jsx';

class ImportParticipants extends React.Component {

    constructor(props) {
        super(props);
        this.handleFileSelect = this.handleFileSelect.bind(this);
        this.handleImport = this.handleImport.bind(this);
        this.handleOnLoad = this.handleOnLoad.bind(this);
        this.parseData = this.parseData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state={
            file:'',
            format:{
                edit:false,
                participant:{
                    search:/(.*)(?:[,\n\r]|$)/g,
                    name:{
                        search:/([A-Z][a-z]+)/,
                        replace:"$1"
                    },
                    email:{
                        search:/([0-9a-zA-Z\-_=+]*@\w+\.\w+)/i,
                        replace:"$1"
                    },
                    phone:{
                        search:/(\d{3}-?\d{3}-?\d{4}-?)/i,
                        replace:"$1"
                    }
                }
            },
            results:{
                finished:false,
                participants:[],
                html:""
            },
            errorMsg:''
        };
    }

    handleFileSelect(event) {
        this.setState({
            file:event.target.files[0]
        });
    }

    handleImport(event) {
        event.preventDefault();
        console.log(this.state.file);

        // if (this.state.file.type === 'text/plain') {
            const reader = new FileReader();
            reader.readAsText(this.state.file);
            reader.onload = this.handleOnLoad;
        // }
    }
    handleSubmit(event) {
        event.preventDefault();
        TargetGroupAPI.instance.addParticipants(this.props.id,this.state.results.participants);
        this.setState({

            results:{
                finished:false
            },

        });

    }
    handleOnLoad(event) {
        this.parseData(event.target.result);
    }

    parseData(text) {
        // const allTextLines = text.split(/\r\n|\n/);
        // const lines = [];

        // //TODO Sajiva, I changed to make it work. What is needed is a addParticipant(s)...
        // //TODO So that we can send a array of participants instead of one at a time.
        // //TODO Also, if you use the right regex string you can get right of errors that can
        // //TODO occur with useing this method.
        // //TODO Use the Following site.
        // //TODO   https://regex101.com/r/DP0tjG/1
        // for (let i = 0; i < allTextLines.length; i++)
        // {
        //     let data = allTextLines[i].split(',');
        //
        //     /***************************************************************/
        //     TargetGroupAPI.instance.addParticipant(this.props.id,{email:data[0]});
        //     /***************************************************************/
        // }
        let $this=this;
        let dealWithEntry=function(line,participant){
            let participantFormats=$this.state.format.participant;

            let emailMatch=line.match(participantFormats.email.search);
            let nameMatch=line.match(participantFormats.name.search);
            let phoneMatch=line.match(participantFormats.phone.search);

            let order={};

            order[emailMatch?(emailMatch.index+emailMatch[0].length):"-1"]="email";
            order[nameMatch?(nameMatch.index+nameMatch[0].length):"-1"]="name";
            order[phoneMatch?(phoneMatch.index+phoneMatch[0].length):"-1"]="phone";
            delete order["-1"];
            let keys=Object.keys(order);
            keys.sort();
            let newKeys=[];
            keys.forEach(function(item){
                newKeys.push({index:item,value:order[item]});
            });
            keys=newKeys;


            let emailExec=participantFormats.email.search.exec(line);
            let nameExec=participantFormats.name.search.exec(line);
            let phoneExec=participantFormats.phone.search.exec(line);

            let emailValue=emailMatch?emailExec[0].replace(participantFormats.email.search,participantFormats.email.replace):"Unkown";
            let nameValue=nameMatch?nameExec[0].replace(participantFormats.name.search,participantFormats.name.replace):"Unkown";
            let phoneValue=phoneMatch?phoneExec[0].replace(participantFormats.phone.search,participantFormats.phone.replace):"Unkown";

            let emailValueHtml=emailMatch?emailExec[0].replace(participantFormats.email.search,"<span class='email-found'>"+emailValue+"</span>"):"Unkown";
            let nameValueHtml=nameMatch?nameExec[0].replace(participantFormats.name.search,"<span class='name-found'>"+nameValue+"</span>"):"Unkown";
            let phoneValueHtml=phoneMatch?phoneExec[0].replace(participantFormats.phone.search,"<span class='phone-found'>"+phoneValue+"</span>"):"Unkown";

            let html=line;
            keys.forEach(function(item){
                participantFormats[item.value].lastIndex=item.index;
            });
            html=emailMatch?html.replace(participantFormats.email.search,emailValueHtml):html;
            html=nameValueHtml?html.replace(participantFormats.name.search,nameValueHtml):html;
            html=phoneValueHtml?html.replace(participantFormats.phone.search,phoneValueHtml):html;



            keys.forEach(function(item){
                participantFormats[item.value].lastIndex=0;
            });

            participant.name=nameValue;
            participant.email=emailValue;
            participant.phone=phoneValue;
            participant.found=(emailMatch || nameMatch || phoneMatch);
            if(participant.found){
                return "<span class='entry-found'><span class='entry-display'>"+html+"</span><span class='entry-popup'></span></span>";
            }
            else
            {
                return html;
            }




        };
        let participants=[];
        let finalHtml=text.replace(this.state.format.participant.search,function(item){
            let participant={};
            let html=dealWithEntry(item,participant);
            if(participant.found){
                participants.push({
                    name:participant.name,
                    email:participant.email,
                    phone:participant.phone
                });
            }

            return html;

        });

        this.setState({

            results:{
                participants,
                finished:true,
                html:finalHtml
            },

        });

    }

    render() {

        return (
            <form onSubmit={this.handleImport} className="main-content">
                <label>Import Participants</label>
                <input type="file" required="true" onChange={this.handleFileSelect}/>
                <span>{this.state.errorMsg}</span>
                {(this.state.format.edit?
                    (<input type="text" value={this.state.format.participant.entry}/>):""
                )}
                <button type="submit" className="btn my-button-class">Parse</button>
                {(this.state.format.edit?
                    (<button onClick={this.handleImport} className="btn my-button-class" >Edit Formats</button>):"")}
                {(this.state.results.finished?
                    (<div className="import-results"><div><span className=" results-count">{this.state.results.participants.length}</span></div>
                            <div><pre className=" results" dangerouslySetInnerHTML={{__html:this.state.results.html}}/></div>
                            <button onClick={this.handleSubmit} className="btn my-button-class" >Submit</button>
                        </div>

                    ):""
                )}
            </form>
        )
    }
}

export default ImportParticipants;
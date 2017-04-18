import React from 'react';
<<<<<<< HEAD
import {Modal} from 'react-bootstrap';
import APIComponent from 'components/Containers/APIComponent.jsx';
import ParticipantAPI from '../../libaries/APIs/ParticipantAPI.jsx';
import $ from "jquery";

class Participant extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isSelected:this.props.isSelected
        };

        this.toggleSelection=this.toggleSelection.bind(this);
    }
    componentWillReceiveProps(props){
        this.setState({
            isSelected:props.isSelected
        });
    }
    toggleSelection(){
		console.log("This is "+ this.state.isSelected+ ": " + this.props.Index);
        this.setState({
            isSelected:!this.state.isSelected
        },
		function(){
            this.state.isSelected?
                this.props.onSelected(this.props.Index, this.props.Participant):
                this.props.onUnselected(this.props.Index, this.props.Participant);
        }.bind(this));
    }
    render() {
        return (<tr onClick={this.toggleSelection} className={this.state.isSelected?"selected":""}>
					<td> {this.state.isSelected ? <span className= "glyphicon glyphicon-check" /> : <span className= "glyphicon glyphicon-unchecked" />}</td>
                    <td>{this.props.Participant.name}</td>
                    <td>{this.props.Participant.email}</td>
                    <td>{this.props.Participant.phone}</td>
                </tr>);
    }
}
Participant.propTypes={
    Participant:React.PropTypes.object.isRequired,
    Index:React.PropTypes.number.isRequired,
    onSelected:React.PropTypes.func,
    onUnselected:React.PropTypes.func,
    isSelected:React.PropTypes.bool
};
Participant.defaultProps={
    onUnselected:function(){},
    onSelected:function(){},
    isSelected:false
}

class Participants extends React.Component{
    constructor(props){
        super(props);
        this.state={
            SelectedParticipants:[]
        };

        this.selectParticipant=this.selectParticipant.bind(this);
        this.unSelectParticipant=this.unSelectParticipant.bind(this);

    }

    selectParticipant(index, participant){
        if(typeof this.state.SelectedParticipants[index] != "undefined"){ // Already selected
            // Do we want to allow this...
            return;
        }

        /*******************************************************************/
        let insertThis={};
        insertThis[index]=participant;

        /*******************************************************************/
        this.setState($.extend(true,this.state,{SelectedParticipants:insertThis} ),function(){
            this.props.onSelectionChanged(this.state.SelectedParticipants);
        }.bind(this));

    }
    unSelectParticipant(index){
        if(typeof this.state.SelectedParticipants[index] == "undefined"){ // Already un - selected
            // Do we want to allow this...
            return;
        }

        /*******************************************************************/
        let updateWithThis=this.state.SelectedParticipants;
        delete updateWithThis[index];

        /*******************************************************************/
        this.setState(updateWithThis,function(){
            this.props.onSelectionChanged(this.state.SelectedParticipants);
        }.bind(this));
    }

    isSelected(index)
    {
        /*******************************************************************/
        if(typeof this.state.SelectedParticipants[index] != "undefined"){ // Already selected
            return true;
        }

        /*******************************************************************/
        return false;
    }
    render(){
        return ( <div className = "target-table-container">
		<table className = "table">
                    <thead>
                        <tr>
							<th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/**************************/}
                        {this.props.Participants.map(function(participant, index){
                            return <Participant key={index} Index={index} Participant={participant} onUnselected={this.unSelectParticipant} onSelected={this.selectParticipant} isSelected={this.isSelected(index)} />
                        }.bind(this))}
                        {/**************************/}
                    </tbody>
                </table>
				</div>
				);
    }

}
Participants.propTypes={
    Participants:React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    onSelectionChanged:React.PropTypes.func,
    SelectedParticipants:React.PropTypes.object // { indexID:Participant,  ...
};

Participants.defaultProps= {
    onSelectionChanged:function(){}
};

class AssessmentTargetGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            SelectedParticipants:[],
            popupOpen:false

        };

        this.closedPopup=function(){
            this.setState({
                popupOpen:false
            });
        }.bind(this);
        this.openPopup=function(){
            this.setState({
                popupOpen:true
            });
        }.bind(this);


    }




    render(){
        return ( <div><span onClick={this.openPopup} className="btn btn-success">Open</span>

                    <APIComponent Fetch={true} APIListener={ParticipantAPI.instance} Event={"get-participants"}>
                        {function(data, change, send, setData, isLoading){
                            let participants=data.participants;
    
                            /***************************************************/
                            return (<Modal

                                show={this.state.popupOpen}
                                onHide={this.closedPopup}
                                container={this}
                                aria-labelledby="participantPopupTable">
                                <Modal.Header closeButton>
                                    <Modal.Title id="participantPopupTable">Select Participants to move over</Modal.Title>
                                </Modal.Header>
    
                                <Modal.Body>
                                    <Participants Participants={participants}/>
                                </Modal.Body>
    
                                <Modal.Footer>
                                    <div className="btn btn-success">Ok</div>
                                </Modal.Footer>
                            </Modal>);
                        }.bind(this)}
                 </APIComponent>
              </div>);



=======
import $ from 'jquery';

class AssessmentTargetGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isTargetSelected: false,
            tableData: []
        };
        this.isToggled = this.isToggled.bind(this);
    }

    isToggled(){
        this.setState({
            isTargetSelected: !this.state.isTargetSelected
        });
        console.log("isTargetSelected is " + this.state.isTargetSelected);
    }


    render(){
        return(
            <div className="target-table-container">
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={this.isToggled}>
                            <td>Allen Alexander</td>
                            <td>a3@baxter.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
    }
}

export default AssessmentTargetGroup;
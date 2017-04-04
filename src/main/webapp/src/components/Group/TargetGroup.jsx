import React from 'react';
import TargetGroupAPI from '../../libaries/APIs/TargetGroupAPI.jsx';
import ImportParticipants from './ImportParticipants.jsx';
class TargetGroup extends React.Component {

    constructor(props){
        super(props);
        var $this=this;
        this.state={
            group:{
                name:"Loading...",
                participantSet:[]
            }
        };
        TargetGroupAPI.instance.hook().on("get-targetgroup",function(data){
            $this.setState({
                group:data.targetGroupData
            });
        });
    }
    componentDidMount()
    {
        TargetGroupAPI.instance.initiate("get-targetgroup",{id:this.props.params.targetGroup});
    }
    render(){
        const $targetGroups=this.state.group.participantSet.map(function(item, index){
            return (<tr className="target-group" key={index}>
                        <td className="name">{item.name}</td>
                        <td className="email">{item.email}</td>
                        <td className="phone">{item.phone}</td>
                    </tr>);
        });
        return (
            <div className="target-group">
                <ImportParticipants id={this.props.params.targetGroup}/>
                <h2>{this.state.group.name}</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                    {$targetGroups}
                    </tbody>
                </table></div>)
        }

}

export default TargetGroup
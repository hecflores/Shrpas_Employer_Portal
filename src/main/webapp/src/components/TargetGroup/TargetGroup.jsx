import React from 'react';
import TargetGroupAPI from '../../libaries/APIs/TargetGroupAPI.jsx';
import ImportParticipants from './ImportParticipants.jsx';
import PageContent from 'components/Template/PageContent.jsx';
class TargetGroup extends React.Component {

    constructor(props){
        super(props);
        const $this = this;
        this.state={
            group:{
                name:"Loading...",
                participantSet:[]
            }
        };
        TargetGroupAPI.instance.hook().on("get-targetgroup",function(data){
            $this.setState({
                group:data.data.targetGroupData
            });
        });
    }
    componentDidMount()
    {
        TargetGroupAPI.instance.initiate("get-targetgroup",{id:this.props.params.targetGroup});
    }
    render(){
        const $participants = this.state.group.participantSet.map(function(item, index){
            return (<tr className="participant" key={index}>
                        <td className="name">{item.name}</td>
                        <td className="email">{item.email}</td>
                        <td className="phone">{item.phone}</td>
                    </tr>);
        });
        return (<PageContent PageTitle={this.state.group.name}>
                    <div className="main-container">
                        <ImportParticipants id={this.props.params.targetGroup}/>
                        <div className="main-content">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {$participants}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </PageContent>)
        }

}

export default TargetGroup
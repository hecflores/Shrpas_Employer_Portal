import React from 'react';
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
    }
}

export default AssessmentTargetGroup;
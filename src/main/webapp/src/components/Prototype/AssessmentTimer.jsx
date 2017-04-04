import React from 'react';
import $ from 'jquery';

class AssessmentTimer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allowed_time_sec: this.props.allowed_time_sec,
            istimed: this.props.istimed,
            setting:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.setTimeAllowed = this.setTimeAllowed.bind(this);
        this.setting = this.setting.bind(this);
    }
    handleChange(event){

        if (event.key === 'Enter') {
           this.setTimeAllowed();
           return;
        }
        const timeInSeconds = event.target.value;
        console.log(timeInSeconds);

        this.setState({
            allowed_time_sec: timeInSeconds,
            istimed:true
        });
    }
    setting(){
        this.setState({
            setting:true
        })
    }
    setTimeAllowed()
    {
        this.props.onSavedTime(this.state);
    }
    render(){
        return(
            <div className='time-allowed'>
                <div onClick={this.setting} className="">
                    <i className="fa fa-clock-o"/>
                    Time allowed ({this.state.allowed_time_sec?this.props.allowed_time_sec+" sec":""})
                </div>
                {this.state.setting?(
                        <input type="text" onKeyUp={this.handleChange}  />
                    ):""}


            </div>
        );
    }
}

export default AssessmentTimer;
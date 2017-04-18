import React from 'react';
import Loader from '../Containers/Loader.jsx';
import $ from 'jquery';

class AssessmentTimer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
<<<<<<< HEAD
            allowed_time_sec: this.props.timeInSeconds,
=======
            allowed_time_sec: this.props.allowed_time_sec,
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
            istimed: this.props.istimed,
            setting:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.setTimeAllowed = this.setTimeAllowed.bind(this);
        this.setting = this.setting.bind(this);
<<<<<<< HEAD
        this.notSetting = this.notSetting.bind(this);

    }
    componentWillReceiveProps(props){
        this.setState({
            allowed_time_sec: props.timeInSeconds,
            istimed: props.istimed,
        })
=======
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
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
<<<<<<< HEAD
    notSetting(){
        this.setState({
            setting:false
        })
    }
    setTimeAllowed()
    {
        this.setState({
            setting: false
        });
=======
    setTimeAllowed()
    {
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
        this.props.onSavedTime(this.state);
    }
    render(){
        debug("AssessmentTimer: render() -> ",this.state);
        return(
            <div className='time-allowed'>
                <div onClick={this.setting} className="">
                    <i className="fa fa-clock-o"/>
<<<<<<< HEAD
                    Time allowed ({this.props.isSaving?<Loader/>:this.state.allowed_time_sec?this.state.allowed_time_sec+" sec":""})
                </div>
                {this.state.setting?(
                        <input onBlur={this.notSetting} type="text" onKeyUp={this.handleChange}  />
=======
                    Time allowed ({this.state.allowed_time_sec?this.props.allowed_time_sec+" sec":""})
                </div>
                {this.state.setting?(
                        <input type="text" onKeyUp={this.handleChange}  />
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
                    ):""}


            </div>
        );
    }
}

export default AssessmentTimer;
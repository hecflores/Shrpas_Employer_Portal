import React from 'react';
import Popup from 'react-popup';
import ReactDom from 'react-dom';

class HintsDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasHint: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleHintChanged=this.handleHintChanged.bind(this);
    }
    handleHintChanged(value){
        var $this=this;
        this.setState(value,function(){
            $this.props.onHintChanged($this.state);
        });

    }
    handleChange(event) {
        var $this=this;
        this.setState({
            hasHint: event.target.value=="YES"
        },function(){
            $this.props.onHintChanged($this.state);
        });

    }

    render() {

        return (
            <div>
              <label className='hints-checkbox-label'>
                Hints
                <select className='hints-checkbox-select' value={this.state.hasHint?"YES":"NO"} onChange={this.handleChange}>
                  <option value="YES">Yes</option>
                  <option value="NO">No</option>
                </select>
              </label>
              <Hints onHintChanged={this.props.onHintChanged} onChoose = {this.state.hasHint}/>
            </div>
        )
    }
}

class Hints extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hint: ''
        };
        if(this.props.onHintChanged){

        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var $this=this;
        this.setState({
            hint: event.target.value
        },function(){
            this.props.onHintChanged($this.state);
        });

    }


    render() {
        if (this.props.onChoose) {
            return (
                <form> 
                  <div className="form-group">
                    <label htmlFor="hintContent hint-input-label">Hint</label>
                    <textarea placeholder= 'Hint text' className='hint-input' type="text" value={this.state.hint} onChange={this.handleChange}/>
                  </div>
                </form>
            );
        }
        return null;
    }
}



export default HintsDropdown;

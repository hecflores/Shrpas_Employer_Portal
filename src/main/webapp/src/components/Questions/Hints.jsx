import React from 'react';
import Popup from 'react-popup';
import ReactDom from 'react-dom';

class HintsDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasHint: "NO"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            hasHint: event.target.value
        });
        console.log("This is hasHint: " + this.state.hasHint);
    }

    render() {

        return (
            <div>
              <label className='hints-checkbox-label'>
                Hints
                <select className='hints-checkbox-select' value={this.state.hasHint} onChange={this.handleChange}>
                  <option value="YES">Yes</option>
                  <option value="NO">No</option>
                </select>
              </label>
              <Hints eventHandler = {this.props.eventHandler} onChoose = {this.state.hasHint}/>
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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            hint: event.target.value
        });
        console.log("This is hint: " + this.state.hint);
        this.props.eventHandler.trigger("save-hint", {hasHint:true, hint:event.target.value})
    }


    render() {
        if (this.props.onChoose == "YES") {
            return (
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="hintContent hint-input-label">Hint</label>
                    <textarea placeholder= 'Hint text' className='hint-input' type="text" value={this.state.hint} onChange={this.handleChange}/>
                  </div>
                </form>
            );
        } else(this.props.onChoose == "NO")
        return null;
    }
}



export default HintsDropdown;

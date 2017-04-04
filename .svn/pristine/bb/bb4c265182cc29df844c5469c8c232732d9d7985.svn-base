import React from 'react';
import Popup from 'react-popup';

class SetExpiration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            done: false
        };

        this.updateState = this.updateState.bind(this);
        this.submitDate = this.submitDate.bind(this);
    }
    submitDate(event) {
        this.setState({
            done: true
        });
    }
    updateState(event) {
        this.setState({
            value: event.target.value,
            done:false
        });
    }

    theForm() {
        var printedForm = "";
        if (this.state.done) {
            printedForm = this.printForm();
        }
        return ( <div>
            <label>
                Date(mm/dd/yyyy):
                <input type = "text"
                        value = {
                            this.state.value
                        }
                        onChange = {
                            this.updateState
                        }
                /> </label> <button onClick = {
                this.submitDate
            }>Submit Date</button> <div> {
                printedForm
            } </div> </div>
        );
    }

    message() {
        return (<div className = "Message" >
            <h1> Set Expiration Date </h1> </div>
        );
    }

    printDate() {
        var date = this.state.value;
        var dateSplit = date.split('/');
        if (dateSplit.length == 3) {
            var month = dateSplit[0];
            var day = dateSplit[1];
            var year = dateSplit[2];
        } else {
            date = "Invalid";
            return (<div>
                User entered: {
                    date
                } </div>
            );
        }
        if (parseInt(month) < 1 || parseInt(month) > 12) {
            date = "Invalid";
            return (<div>
                User entered: {
                    date
                }</div>
            );
        }
        if (parseInt(day) < 1 || parseInt(day) > 31) {
            date = "Invalid";
            return (<div>
                User entered: {
                    date
                }</div>
            );
        }
        if (parseInt(month) == 2 && parseInt(day) > 28) {
            date = "Invalid";
            return (<div>
                User entered: {
                    date
                } </div>
            );
        } else if ((parseInt(month) == 4 || parseInt(month) == 6 || parseInt(month) == 9 || parseInt(month) == 11) && parseInt(day) > 30) {
            date = "Invalid";
            return (<div>
                User entered: {
                    date
                }</div>
            );
        }

        var expiration = new Date();
        var currentDate = new Date();
        expiration.setMonth(month - 1);
        expiration.setDate(day);
        expiration.setYear(year);
        expiration.setHours(0);
        expiration.setMinutes(0);
        expiration.setSeconds(0);
        expiration.setMilliseconds(0);

        if (expiration < currentDate) {
            date = this.state.value;
            return (<div>
                <div>
                User entered: {
                    date
                }</div>
                <div>Date has already passed!</div>
                </div>
            );
        }

        return (<div className = "Full Date">
            <div>
            User entered: {
                date
            } </div><div>
            Month: {
                month
            } </div><div>
            Day: {
                day
            } </div><div>
            Year: {
                year
            } </div></div>
        );
    }

    printForm() {
        return (<div className = "Print Form">{
            this.printDate()
        } </div>);
    }

    render() {
        return (<div className = "Comment">
            <div className = "Saying Hello"> {
                this.message()
            } </div><div className = "Form"> {
                this.theForm()
            } </div></div>
        );
    }
}

export default SetExpiration;
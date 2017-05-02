import React from "react";
import Rests from "../../libaries/Rest.jsx";
import UserAPI from "../../libaries/APIs/UserAPI.jsx";
import $ from 'jquery';
import {Action} from 'react-router';
import PageContent from 'components/Template/PageContent.jsx';
class GetUserInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            init: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });

    }

    componentDidMount() {


    }

    handleSubmit(e) {
        const $this = this;

        $this.setState({
            failed: false,
            loading: true,
            message: "Signing In"
        });

        const loginData = {
            username: this.state.username,
            password: this.state.password
        };


        UserAPI.instance.login(this.state.username, this.state.password, function (data) {

            if (data.data.success) {
                window.location = "/app/home";
                return;
            }
            $this.setState({
                failed: true,
                loading: false,
                message: data.message,
                init: false
            });
        });


    }

    render() {
        return (<div className="login-form">

                    <div>
                        <label className="username-label text-left"><b>Username: </b></label>
                        <input className="username-input " placeholder='Enter username' name="username" type="text"
                               value={this.state.username} onChange={this.handleChange} autoFocus required/>
                        <br/>
                        <label className="password-label text-left"><b>Password: </b></label>
                        <input className="password-input" name="password" placeholder='Enter password'
                               type="password" value={this.state.password} onChange={this.handleChange} required/>
                        <br/>
                        {(this.state.failed ?
                            (<div className="failed-login">
                                <h4 className="text-danger">{this.state.message}</h4>
                            </div>) : "")}
                        {(this.state.loading ?
                            (<div className="failed-login">
                                <h4 className="text-info">{this.state.message}</h4>
                            </div>) : "")}

                        <button type="submit" className="login-button text-left" onClick={this.handleSubmit}>Login
                        </button>
                    </div></div>

        )
    }
}

export default GetUserInput;

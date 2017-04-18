import React from 'react';
import $ from 'jquery';
import APIComponent from 'components/Containers/APIComponent.jsx';
import UserAPI from 'libaries/APIs/UserAPI.jsx';
class EditUserInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: props.user.username,
                title: props.user.title,
                organization: props.user.organization,
                email: props.user.email
            }
        };

        this.handleChange = this.handleChange.bind(this);
    }
    componentWillReceiveProps(props){
        this.setState({
            user: {
                username: props.user.username,
                title: props.user.title,
                organization: props.user.organization,
                email: props.user.email
            }
        });
}
    handleChange(event) {
        this.setState({
            user: $.extend(this.state.user,{
                [event.target.name]: event.target.value
            })
        });
    }

    render() {
        return(
            <APIComponent initialInput={this.state.user} initialOutput={this.state.user} onSubmit={this.props.handleSubmit} APIListener={UserAPI.instance} Event="update-user-profile">
                {function(user, change, update, setUser, isSaving){
                    return <form  className="user-profile-edit">
                                <input type="text" name="title" value={this.state.user.title} onChange={this.handleChange} placeholder="Title" className="form-control" autoFocus="true"/>
                                <input type="text" name="organization" value={this.state.user.organization} onChange={this.handleChange} placeholder="Organization" className="form-control"/>
                                <input type="text" name="email" value={this.state.user.email} onChange={this.handleChange} placeholder="Email" className="form-control"/>
                                <span onClick={update} className="my-button-class ">Update Profile</span>
                            </form>;
                }.bind(this)}

            </APIComponent>
        )
    }
}

export default EditUserInfo;
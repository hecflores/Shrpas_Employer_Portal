import React from 'react';
import ProfilePicContainer from './ProfilePicContainer.jsx';
import DisplayUserInfo from './DisplayUserInfo.jsx';
import EditUserInfo from './EditUserInfo.jsx';
import APIComponent from 'components/Containers/APIComponent.jsx';
import UserAPI from 'libaries/APIs/UserAPI.jsx';
import PageContent from 'components/Template/PageContent.jsx';
class UserProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
                title: '',
                organization: '',
                email: ''
            },
            photo: '',
            editing: false
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleEdit() {
        this.setState({
            editing: true
        });
    }

    handleUpdate(userInfo) {
        this.setState({
            editing: false,
            user:userInfo
        });
    }

    render() {

        return (
            <PageContent PageTitle="User Profile">
                <APIComponent Fetch={true} APIListener={UserAPI.instance} Event="get-user-profile">
                    {function (user, change, send, setData, isLoading) {
                        let userInfo = this.state.editing ?
                            <EditUserInfo user = {user} handleSubmit={this.handleUpdate}/> :
                            <DisplayUserInfo user={user} handleOnClick={this.handleEdit}/>;

                        return <div className="main-container">
                                <div className="user-profile-name">{user.username}</div>
                                    <div className="user-profile-container">
                                        <ProfilePicContainer photo={this.state.photo} editing={this.state.editing}/>
                                        <div className="user-info-container">
                                            {userInfo}
                                        </div>
                                    </div>
                                </div>;
                    }.bind(this)}
                </APIComponent>
            </PageContent>

        )
    }
}

export default UserProfile;
import React from 'react';
import defaultProfilePic from '../../../static/img/empty-user.png';

class ProfilePic extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let profilePhoto = (this.props.photo == '') ? defaultProfilePic : this.props.photo;
        return(
            <img className="profile-pic" src={profilePhoto} />
        )
    }
}

export default ProfilePic;
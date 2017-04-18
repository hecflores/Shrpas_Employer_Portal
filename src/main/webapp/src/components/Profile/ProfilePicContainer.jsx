import React from 'react';
import ProfilePic from './ProfilePic.jsx';

class ProfilePicContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            file:'',
            previewUrl:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleOnLoad = this.handleOnLoad.bind(this);
    }

    handleChange(event) {
        let file = event.target.files[0];
        console.log(file.type);

        if (file == undefined) {
            this.setState({
                file: '',
                previewUrl: ''
            });
        } else if (file.type){
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = this.handleOnLoad;

            this.setState({
                file: file
            });
        }
    }

    handleOnLoad(event) {
        this.setState({
            previewUrl: event.target.result
        });
    }

    render() {
        let uploadPic = this.props.editing ?
            <input type="file" required="true" onChange={this.handleChange} accept="image/*" /> :
            null;

        return (
            <div className="profile-pic-container">
                <ProfilePic photo = {this.state.previewUrl}/>
                {uploadPic}
            </div>
        )
    }

}

export default ProfilePicContainer;
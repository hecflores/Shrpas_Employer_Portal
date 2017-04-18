import React from 'react';
import defaultPhoto from '../../../static/img/empty-user.png';

class ProfilePhoto extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            file:'',
            previewUrl:defaultPhoto
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleOnLoad = this.handleOnLoad.bind(this);
    }

    handleChange(event) {
        let file = event.target.files[0];

        if (file == undefined) {
            this.setState({
                file: '',
                previewUrl: defaultPhoto
            });
        } else {
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
        let imagePreview = (<img className="profile-pic" src={this.state.previewUrl} />);

        return (
            <div className="profile-pic-container">
                {imagePreview}
                <input type="file" required="true" onChange={this.handleChange} accept="image/*" />
            </div>

        )
    }

}

export default ProfilePhoto;
import React from 'react';
import $ from 'jquery';

class User extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const firstName = this.getFirstName();
        const lastName = this.getLastName();
        const email = this.getEmail();
        return (
            <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
            </tr>
        );
    }
    getFirstName(){
        return this.props.firstName;
    }
    getLastName(){
        return this.props.lastName;
    }
    getEmail(){
        return this.props.email;
    }
}

export default User;
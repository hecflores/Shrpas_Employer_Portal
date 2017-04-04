import React from 'react';
import Popup from 'react-popup';

class UserForm extends React.Component{
    constructor(props){
        super(props);
    }
    addUser(){
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        this.props.addUserToGroup(firstName, lastName, email);
    }
    render(){
        return (
            <div>
              <form style={{display:'inline',}} action="#" method="POST">
                  <div>
                      <label htmlFor="firstName">First Name:</label>
                      <br/>
                      <input id="firstName" type="text" />
                  </div>
                  <div>
                      <label for="lastName">Last Name:</label>
                      <br/>
                      <input id="lastName" type="text" />
                  </div>
                  <div>
                      <label for="email">Email:</label>
                      <br/>
                      <input id="email" type="email" />
                  </div>
                  <br/>
                  <div>
                  </div>
              </form>
                <br/>
                <button onClick={() => {this.addUser()}} className="btn btn-default">Add User</button>
            </div>
        );
    }

}

export default UserForm;
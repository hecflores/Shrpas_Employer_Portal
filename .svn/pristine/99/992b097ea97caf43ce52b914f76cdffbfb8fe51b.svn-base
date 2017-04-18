import React from 'react';
import User from './User/User.jsx';
import UserForm from './User/UserForm.jsx';
import ReactDom from 'react-dom';
import $ from 'jquery';

class Group extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
            index: 0
        };
    }
    addUserToGroup(firstName, lastName, email){
        const newUser = {key: this.state.index.toString(), firstName: firstName, lastName: lastName, email: email};
        let newState = this.state.users;
        newState.push(newUser);
        this.setState({
            users: newState,
            index: this.state.index + 1
        });
    }
    render(){
        const userList = this.state.users.map((user) =>
            <User key={user.key.toString()}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  email={user.email}
            />
        );
        return (
          <div>
              <UserForm addUserToGroup={this.addUserToGroup.bind(this)}/>
              <br/><br/>
              <div className="table-responsive">
                  <table className="table table-hover" >
                      <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email:</th>
                      </tr>
                      {userList}
                  </table>
              </div>
          </div>
        );
    }
}

export default Group

import React from 'react';


class User extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.email}</td>
            </tr>
        )
    }
}
class UserList extends React.Component{
    addUser(){
        $.get("/users/add",{name:$("#exampleInputName1").val(),email:$("#exampleInputEmail1").val()},function(){

        });
    }

    render() {
        const users = this.props.users.map(user =>
            <User key={user.id} user={user}/>
        );
        return (
            <div style={{"color":"white","box-shadow":"1px 1px 5px black","padding":"10px","background":"rgb(50,50,50)"}}>
                <div style={{"padding":"20px"}}>
                    <h1>Current Users</h1>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>

                        </thead>
                        <tbody>
                        {users}
                        </tbody>
                    </table>
                </div>
                <div style={{"padding":"20px"}}>
                    <h1>Add a User</h1>
                    <form >
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" id="exampleInputName1" placeholder="Enter Name"/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Email"/>
                        </div>
                        <span className="btn-primary btn btn-lg btn-block" onClick={this.addUser.bind()}>Add</span>
                    </form>
                </div>

            </div>




        )
    }
}
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }
    updateUsers(){
        const $this=this;
        $.get("/users/all",function(data){
            if(typeof data == "string"){
                data=JSON.parse(data);
            }
            $this.setState({users: data});
        });
    }
    componentDidMount() {

        const $this=this;
        this.updateUsers();
        setInterval(function(){
            $this.updateUsers();
        },1000)

    }

    render() {
        return (

            <div style={{position:"absolute",left:"50vw","top":"50vh","transform":"translate(-50%,-50%)"}}>
                <UserList users={this.state.users}/>
            </div>

        )
    }
}

export default App;
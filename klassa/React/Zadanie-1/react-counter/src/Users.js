import React, { Component } from 'react';
import UsersList from './UsersList';


class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            usersName: '',
            users: []
        }
    };

    // tą metodę wykorzystujemy przy ref={input => this.userName = input}
    addUser = () => {
        // console.log(this.userName.value)
        // this.setState(prevState => {
        //     return({
        //         users: prevState.users.concat(this.userName.value)
        //     })
        // })
        

    }
    onInputChange = (event) => {
        this.setState({usersName: event.target.value});
        // console.log(event.target.value);
    }
    addNewUser =() =>{
        let user = {
            name: this.state.usersName,
            id: Date.now()
        }
        this.setState(prevState => {
            return({
                users: prevState.users.concat(user),
                usersName: ''
            })
        })
       
    }
    removeUser = (id, name) => {
        let users = this.state.users;
        users = users.filter(currentUser => {
            if (currentUser.id !== id) return currentUser;
        });
        this.setState({users: users});
    }

    

    render() { console.log(this.state.users);
        return(<div className="users-panel">
        
        <input type="text" value = {this.state.usersName} 
        onChange = {this.onInputChange}
        // ref={input => this.userName = input}
        />
        <button onClick = {this.addNewUser}>Add User</button>
        <UsersList users={this.state.users} 
        removeUser={this.removeUser}
        />
        
    </div>)
    }
}

export default Users;




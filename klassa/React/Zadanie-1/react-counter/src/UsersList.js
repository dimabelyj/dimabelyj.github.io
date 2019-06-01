import React from 'react';

const UsersList = (props) => {
    console.log(props);
    return (<ul>
            {props.users.map(currentUser=>
                <li key={currentUser.id} 
                onClick={()=> props.removeUser(currentUser.id, currentUser.name)}>
                {currentUser.name}</li>
                )}
          </ul>)
}

export default UsersList;



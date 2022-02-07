import React from "react";
import './Users.css'

const Users = ({users}) => {
    return (
        <ul>
            <div className={'listTitle'}>
                <p>Id</p>
                <p>Name</p>
                <p>Email</p>
                <p>Address</p>
                <p>IsAdmin</p>
            </div>
            {users.map(user => (
                <li className={'list'} key={user.id}>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.address.street}</p>
                    <input type="checkbox"/>
                </li>
            ))}
        </ul>
    )
}

export default Users;
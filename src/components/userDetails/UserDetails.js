import React from 'react';

const UserDetails = ({user, getUserId}) => {
    let {id, name, username, email} = user;
    return (

        <div>
            <div>Id -- {id}</div>
            <div>Name -- {name}</div>
            <div>User name -- {username}</div>
            <div>Email -- {email}</div>
            <button onClick={() => getUserId(id)}>Posts</button>
        </div>
    );
};

export default UserDetails;
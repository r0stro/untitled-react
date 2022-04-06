import React from 'react';

const User = ({user, getUser}) => {
    let {id, name} = user;
    return (
        <div>
            <div> {id}--{name}</div>
            <button onClick={()=>getUser(user)}>More</button>
        </div>
    );
};

export default User;
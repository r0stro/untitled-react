import React from 'react';

const User = ({user}) => {
    let {id, name, username, email} = user;
    return (
        <div>
            {id}. {name} -- {username} -- {email}
        </div>
    );
};

export default User;
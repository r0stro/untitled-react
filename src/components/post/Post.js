import React from 'react';

const Post = ({user}) => {
    let {id, title} = user;
    return (
        <div>
            {id}--{title}
        </div>
    );
};

export default Post;
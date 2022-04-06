import React from 'react';

const Comment = (props) => {
    let {id, name} = props;
    return (
        <div>
            {id}--{name}
        </div>
    );
};

export default Comment;
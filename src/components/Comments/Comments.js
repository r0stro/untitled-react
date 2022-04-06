import React, {useEffect, useState} from 'react';

import Comment from "../Comment/Comment";

const Comments = () => {
    
    let [comments, setComments] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    },[])

    return (
        <div>
            {comments.map(value => <Comment key={value.id} id={value.id} name={value.name}/>)}
        </div>
    );
};

export default Comments;
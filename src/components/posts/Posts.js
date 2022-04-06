import React, {useEffect, useState} from 'react';
import Post from "../post/Post";
// import {postService} from "../../services/post.service";

const Posts = ({userId}) => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(value => setPosts(value))
    },[])

    // useEffect(() => {
    //     postService.getByUserId(userId).then(value => setPosts(value))
    // }, [userId])

    return (
        <div>
            {posts.map(value => <Post key={value.id} user={value}/>)}
        </div>
    );
};

export default Posts;
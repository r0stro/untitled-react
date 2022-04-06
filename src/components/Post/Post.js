const Post = (props) => {
    let {id, title} = props;
    return (
        <div>
            {id}--{title}
        </div>
    );
};

export default Post;
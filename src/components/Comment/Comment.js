import React from 'react';

const Comment = (props) => {
     const {name, email, body} = props.comment;

    return (
        <div>
            <h1>Comments:</h1>
    <h2>Name:{name}</h2>
    <h3>Email:{email}</h3>
    <p>comment: {body}</p>
        </div>
    );
};

export default Comment;
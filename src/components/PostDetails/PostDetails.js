import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetails = (props) => {
    const {postId} = useParams();
    const [postDatail, setPostDetail] = useState({});

        useEffect(() => {
            const url = `https://jsonplaceholder.typicode.com/posts/${postId}` ;
            fetch(url)
            .then(res => res.json())
            .then(data => setPostDetail(data))
        },[]);

        const [comment, setComment] = useState([]);

   useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    },[]);
    console.log(props);

        

    return (
        
        <div>   
      <Container maxWidth="sm">
    <h3> This is post of : {postId} </h3>
    <h2>{postDatail.title}</h2>
    <p>{postDatail.body}</p>
     <br/>
     {
        comment.map(comment => <Comment comment={comment}></Comment>)
    }

    
    
      </Container>
     
    
      </div> 

    );
};

export default PostDetails;
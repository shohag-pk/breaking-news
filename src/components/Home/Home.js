import React from 'react';
import { useEffect, useState } from 'react';
import News from '../News/News';


const Home = (props) => {
    const [post, setPost] = useState([]);
   
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
  
     },[])

    //   const [photo, setPhoto] = useState([]);


    // useEffect(() => {
    //     const urlImg = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-07&sortBy=publishedAt&apiKey=6cc36159a3044f22916796df0838375a';
    //     fetch(urlImg)
    //     .then(res => res.json())
    //     .then(data => setPhoto(data))
    // },[]);

    return (
        <div>
            
            {
        post.map(post => <News post = {post} ></News>)
        //photo.map(photo => <News photo = {photo}></News>)
      }
    
        </div>
    );
};

export default Home;
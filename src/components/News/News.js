import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const News = (props) => {
    const {title,id}=props.post;
  // const {urlToImage} = props.photo;

   const history = useHistory();
   const handleClick = (postId) => {
     const url = `/post/${postId}`;
     history.push(url);
   }

    const classes = useStyles();


    return (
        <div>
             <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
         //image={urlToImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      
       
        <br/>
   
        <Button onClick={()=>handleClick(id)} variant="contained" color="primary">
        Post Details
        </Button>
        <br/>
      </CardActions>
    </Card>
        </div>
    );
};

export default News;
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import ThumbDownIcon from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/material/IconButton';

const JokeComponent = () => {

    const [joke, setJoke] = useState('');
    const [liked, setLiked] = useState(0);
    const [disliked, setDisliked] = useState(0);

    
    const fetchJoke = async () => {
        const response = await axios.get('https://api.chucknorris.io/jokes/random')
        setJoke(response.data.value)
    }

    const handleLike = () => {
        setLiked(liked + 1)
    }

    const handleDislike = () => {
        setDisliked(disliked + 1)
    }
    
    useEffect (() => {
        fetchJoke()
    }, []);
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2" >
                    {joke}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={fetchJoke} >New Joke</Button>
                <Button startIcon={<ThumbUpIcon/>} onClick={handleLike} > {liked} Likes</Button>
                <Button startIcon={<ThumbDownIcon/>} onClick={handleDislike} > {disliked} Dislikes</Button>
            </CardActions>
        </Card>
    );
}

export default JokeComponent;

import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

const TweetBox = () => {
    const [ tweetMessage, setTweetMessage ] = useState ('');
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Ruben Ocasio",
            username: "rubendavid",
            verified: true,
            text: tweetMessage,
            avatar:"https://pbs.twimg.com/profile_images/1329812812173111301/y8nlbFnz_400x400.jpg",
            image: tweetImage,
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar src={"https://pbs.twimg.com/profile_images/1329812812173111301/y8nlbFnz_400x400.jpg"} alt="Profile Image"/>
                <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's Happening" type="text"/>
            </div>
            <input onChange={(e) => setTweetImage(e.target.value)} value={tweetImage} className="tweetBox__imageInput" placeholder="Optional: Enter Image Url" type="text"/>
            <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
        </form>
            
        </div>
    )
}

export default TweetBox;

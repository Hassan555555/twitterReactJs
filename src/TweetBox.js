import React, { useState } from 'react'
import "./TweetBox.css"
import { Avatar, Button } from '@material-ui/core'
import db from "./firebase"


function TweetBox() {
    const [tweetMessage, setTweetMessege] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: "Hassan Ali",
            username: "haliha",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        });
        setTweetMessege("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" />
                    <input
                    onChange= {(e) => setTweetMessege(e.target.value)}
                    value={tweetMessage}
                    placeholder="What's happening?" 
                    type ="text" />
                </div>
                <input className="tweetBox__imageInput"
                onChange = {(e) => setTweetImage(e.target.value)}
                value = {tweetImage}
                placeholder="Enter image URL" 
                type="text"/>

                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>   
        </div>
    );
}

export default TweetBox

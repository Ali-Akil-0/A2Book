import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://i.picsum.photos/id/123/536/354.jpg?hmac=mkjhmL7okPiaV7N-UHDfBZ4br8E8wkXSsG9XGN5xEU8"
        message="This is a message"
        timestamp="1601493943737"
        imgName="imgName"
        username="Ali Akil"
      />
    </div>
  );
};

export default Feed;

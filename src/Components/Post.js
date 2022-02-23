import { Avatar } from "@mui/material";
import React from "react";
import ChatBubbleOutlineSharpIcon from "@mui/icons-material/ChatBubbleOutlineSharp";
import "./Post.css";
import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import ReplySharpIcon from "@mui/icons-material/ReplySharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";

const Post = ({ profilePic, imgName, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
        {/* Image */}
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpAltSharpIcon />
          <p className="post_paragraph">Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineSharpIcon />
          <p className="post__paragraph">Comment</p>
        </div>
        <div className="post__option">
          <ReplySharpIcon />
          <p className="post__paragraph">Share</p>
        </div>
        <div className="post__option">
          <AccountCircleSharpIcon />
          <ExpandMoreSharpIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;

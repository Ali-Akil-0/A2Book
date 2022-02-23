import { Avatar, Input } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    if (e.target.file[0]) {
      setImage(e.target.file[0]);
    }
  };
  const handleSubmit = () => {
    console.log("submitting");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="https://i.picsum.photos/id/123/536/354.jpg?hmac=mkjhmL7okPiaV7N-UHDfBZ4br8E8wkXSsG9XGN5xEU8" />
        <form>
          <input
            type="text"
            className="messageSender__input"
            placeholder="What's on your mind"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <Input
            type="file"
            className="messageSender__fileSelector"
            onChange={handleChange}
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="messageSender__button"
          >
            test
          </button>
        </form>
        {/* UploadFile */}
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;

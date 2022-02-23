import React from "react";
import "./StoryReel.css";
import Story from "./Story";

const StoryReel = () => {
  return (
    <div className="storyReel">
      {/*Story> image profile pic title */}
      <Story
        image="https://i.picsum.photos/id/378/536/354.jpg?hmac=rxIiATHJegvkD7ILXhSGJmFENjMKntlojRSCdUqEnm8"
        ProfileSrc="https://i.picsum.photos/id/623/536/354.jpg?hmac=Ntw08W7NhV0LaJ7CNdaJy2YdM1Sxhy36Z4wTP-IKFMY"
        title="story 1"
      />
      <Story
        image="https://i.picsum.photos/id/131/536/354.jpg?hmac=Mat1Pnl1BEQZ1a8yC-kGGGdQrAIhdeQ4U3IdnO_pT8M"
        ProfileSrc="https://i.picsum.photos/id/123/536/354.jpg?hmac=mkjhmL7okPiaV7N-UHDfBZ4br8E8wkXSsG9XGN5xEU8"
        title="story 2"
      />
    </div>
  );
};

export default StoryReel;

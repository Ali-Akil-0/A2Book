import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarRow.css";

const SidebarRow = ({ src, Icon, Title }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <p>{Title}</p>
    </div>
  );
};

export default SidebarRow;

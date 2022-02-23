import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow src="test" Title="Ali Akil" />
      <SidebarRow
        Icon={LocalHospitalIcon}
        Title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} Title="Pages" />
      <SidebarRow Icon={PeopleIcon} Title="Friends" />
      <SidebarRow Icon={ChatIcon} Title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} Title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} Title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} Title="More" />
    </div>
  );
};

export default Sidebar;

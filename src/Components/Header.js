import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StoreIcon from "@mui/icons-material/Store";
import GroupsIcon from "@mui/icons-material/Groups";
import { Avatar, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
          alt="Facebook Logo"
        />
      </div>
      <div className="header__input">
        <SearchIcon />
        <input placeholder="Search A2book" type="text" />
      </div>
      <div className="header__center">
        <div className="header__option header__optionActive">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <PeopleOutlineIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StoreIcon fontSize="large" />
        </div>
        <div className="header__option">
          <GroupsIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header_info">
          <Avatar />
          <h4>User</h4>
        </div>
        <div className="header__moreIcons">
          <IconButton>
            <MenuIcon />
          </IconButton>
          <IconButton>
            <MapsUgcIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;

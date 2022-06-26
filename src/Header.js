import React from "react";
import "./Header.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  console.log(user.photoURL);

  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
      </div>

      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="What's ur looking for?" />
      </div>

      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import "./topbar.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <a href="/" className="link">
            <span className="logo">SaceanuAdmin</span>
          </a>
        </div>
        <div className="topRight">
          <div className="topbarIconIconContainer">
            <IoIosNotificationsOutline style={{ fontSize: "29px" }} />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconIconContainer">
            <GrLanguage style={{ fontSize: "25px" }} />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconIconContainer">
            <IoSettings style={{ fontSize: "27px" }} />
          </div>
          <img
            src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

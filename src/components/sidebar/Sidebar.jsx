import "./sidebar.css";
import {
  MdLineStyle,
  MdOutlineTimeline,
  MdViewTimeline,
  MdOutlineAttachMoney,
  MdBarChart,
  MdDynamicFeed,
  MdWorkOutline,
  MdReport,
} from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <a href="/" className="link">
              <li className="sidebarListItem active">
                <MdLineStyle
                  className="sidebarIcon"
                  style={{ fontSize: "27px" }}
                />
                Home
              </li>
            </a>

            <li className="sidebarListItem">
              <MdOutlineTimeline
                className="sidebarIcon"
                style={{ fontSize: "27px" }}
              />
              Analytics
            </li>
            <li className="sidebarListItem">
              <FaArrowTrendUp
                className="sidebarIcon"
                style={{ fontSize: "27px" }}
              />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <a href="/users" className="link">
              <li className="sidebarListItem">
                <FaRegUser
                  className="sidebarIcon"
                  style={{ fontSize: "27px" }}
                />
                Users
              </li>
            </a>
            <a href="/products" className="link">
              <li className="sidebarListItem">
                <MdViewTimeline
                  className="sidebarIcon"
                  style={{ fontSize: "27px" }}
                />
                Products
              </li>
            </a>
            <li className="sidebarListItem">
              <MdOutlineAttachMoney
                className="sidebarIcon"
                style={{ fontSize: "27px" }}
              />
              Transactions
            </li>

            <li className="sidebarListItem">
              <MdBarChart
                className="sidebarIcon"
                style={{ fontSize: "27px" }}
              />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <IoMailOutline
                className="sidebarIcon"
                style={{ fontSize: "27px" }}
              />
              Mail
            </li>
            <a href="/feedback" className="link">

            <li className="sidebarListItem">
              <MdDynamicFeed
                className="sidebarIcon"
                style={{ fontSize: "27px" }}
                />
              Feedback
            </li>
                </a>
            <a href="/messages" className="link">
              <li className="sidebarListItem">
                <FiMessageSquare
                  className="sidebarIcon"
                  style={{ fontSize: "27px" }}
                />
                Messages
              </li>
            </a>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdWorkOutline
                className="sidebarIcon"
                style={{ fontSize: "27px" }}
              />
              Manage
            </li>
            <li className="sidebarListItem">
              <MdOutlineTimeline
                className="sidebarIcon"
                style={{ fontSize: "27px" }}
              />
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdReport className="sidebarIcon" style={{ fontSize: "27px" }} />
              Raport
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

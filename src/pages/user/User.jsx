import "./user.css";
import { MdOutlinePermIdentity, MdPublish } from "react-icons/md";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Julia Sabaka</span>
              <span className="userShowUserJob">Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <MdOutlinePermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">juliaasabaka10</span>
            </div>
            <div className="userShowInfo">
              <IoCalendarNumberSharp className="userShowIcon" />
              <span className="userShowInfoTitle">10.10.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <FaPhone className="userShowIcon" />
              <span className="userShowInfoTitle">+2 232 342 11</span>
            </div>
            <div className="userShowInfo">
              <IoMdMail className="userShowIcon" />
              <span className="userShowInfoTitle">
                juliaasabaka10@gmail.com
              </span>
            </div>
            <div className="userShowInfo">
              <FaLocationDot className="userShowIcon" />
              <span className="userShowInfoTitle">Romania | Craiova</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="juliaasabaka10"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Julia Sabaka"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="juliaasabaka10@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+2 232 342 11"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Romania | Craiova"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <label htmlFor="file">
                  <MdPublish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

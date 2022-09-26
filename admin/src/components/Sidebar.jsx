import React, { useState } from "react";
import "./style/Sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  PlayCircleOutline,
  List,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  AddToQueue,
  QueuePlayNext,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const {pathname} = useLocation()
  const activePath = pathname.split("/")[1];
  const [activeClass, setActiveClass] = useState(activePath);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3>Dashboard</h3>
          <ul className="sidebarList">

            <Link to="/">
              <li className={activeClass === "" ? "listItem active" : "listItem"}
              onClick={()=>setActiveClass("")}>
                <LineStyle />
                <span>Home</span>
              </li>
            </Link>

            <li className={activeClass === "analitics" ? "listItem active" : "listItem"}
            onClick={()=>setActiveClass("analitics")}>
              <Timeline />
              <span>Analytics</span>
            </li>
            <li className={activeClass === "sales" ? "listItem active" : "listItem"}
            onClick={()=>setActiveClass("sales")}>
              <TrendingUp />
              <span>Sales</span>
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3>Quick Menu</h3>
          <ul className="sidebarList">

            <Link to="/users">
              <li className={activeClass === "users" ? "listItem active" : "listItem"}
              onClick={()=>setActiveClass("users")}>
                <PermIdentity />
                <span>Users</span>
              </li>
            </Link>

            <Link to="/movies">
              <li className={activeClass === "movies" ? "listItem active" : "listItem"}
              onClick={()=>setActiveClass("movies")}>
                <PlayCircleOutline />
                <span>Movies</span>
              </li>
            </Link>
            <Link to="/lists">
              <li className={activeClass === "lists" ? "listItem active" : "listItem"}
              onClick={()=>setActiveClass("lists")}>
                <List />
                <span>Lists</span>
              </li>
            </Link>
            <Link to="/movie/create">
            <li className={activeClass === "movie" ? "listItem active" : "listItem"}
            onClick={()=>setActiveClass("movie")}>
              <AddToQueue />
              <span>Add Movie</span>
            </li>
            </Link>
           <Link to="/list/create">
            <li className={activeClass === "list" ? "listItem active" : "listItem"}
              onClick={()=>setActiveClass("list")}>
                <QueuePlayNext />
                <span>Add List</span>
              </li>
           </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3>Notifications</h3>
          <ul className="sidebarList">
            <li className={activeClass === "mail" ? "listItem active" : "listItem"}
            onClick={()=>setActiveClass("mail")}>
              <MailOutline />
              <span>Mail</span>
            </li>
            <li className={activeClass === "feedback" ? "listItem active" : "listItem"}
            onClick={()=>setActiveClass("feedback")}>
              <DynamicFeed />
              <span>Feedback</span>
            </li>
            <li className={activeClass === "message" ? "listItem active" : "listItem"}
            onClick={()=>setActiveClass("message")}>
              <ChatBubbleOutline />
              <span>Messages</span>
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3>Staf</h3>
          <ul className="sidebarList">
            <li className={activeClass === "manage" ? "listItem active" : "listItem"}
            onClick={()=>setActiveClass("manage")}>
              <WorkOutline />
              <span>Manage</span>
            </li>
            <li className={activeClass === "analiticsTwo" ? "listItem active" : "listItem"}
            onClick={()=>setActiveClass("analiticsTwo")}>
              <Timeline />
              <span>Analytics</span>
            </li>
            <li className={activeClass === "reports" ? "listItem active" : "listItem"}
            onClick={()=>setActiveClass("reports")}>
              <Report />
              <span>Reports</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

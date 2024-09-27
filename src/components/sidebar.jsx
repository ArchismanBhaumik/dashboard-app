import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/People";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CommentIcon from "@mui/icons-material/Comment";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import profilePicture from "../assets/pic1.png";
import rectangle from "../assets/Rectangle 1.svg";
import piChart from "../assets/pi-chart.svg";
import cart from "../assets/cart.svg";
import arrowRight from "../assets/arrowRight.svg";
import folder from "../assets/folder.svg";
import book from "../assets/book.svg";
import userProfile from "../assets/userProfile.svg";
import account from "../assets/account.svg";
import blog from "../assets/blog.svg";
import social from "../assets/social.svg";
import corporate from "../assets/corporate.svg";
import arrowDown from "../assets/arrowDown.svg";



const Sidebar = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const containerStyle = {
    padding: "10px",
    width: "200px",
    fontFamily: "Arial, sans-serif",
  };

  const tabsStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    color: "#b0b0b0", // Gray color for tabs
    fontWeight: "normal",
    fontSize: "14px",
  };

  const activeTabStyle = {
    fontWeight: "bold",
    color: "#b0b0b0",
    borderRadius: "5px",
  };

  const listStyle = {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    color: "black", // Black color for list text
    fontSize: "16px",
  };

  const bulletStyle = {
    height: "8px",
    width: "8px",
    backgroundColor: "#b0b0b0", // Gray bullet point
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "10px",
  };

  const activeListItemStyle = {
    ...listItemStyle,
    backgroundColor: "#f0f0f0", // Light background for active item
  };

  // Icon style (for the left icons)
  const iconStyle = {
    width: "20px",
    height: "20px",
    marginRight: "10px",
  };

  // Arrow style (optional, for collapsibility indicator)
  const arrowStyle = {
    marginLeft: "auto",
    color: "#b0b0b0",
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={profilePicture} alt="User Profile" className="profile-pic" />
        <span>ByeWind</span>
      </div>
      <div style={containerStyle}>
        <div style={tabsStyle}>
          <span style={activeTabStyle}>Favorites</span>
          <span>Recently</span>
        </div>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span style={bulletStyle}></span>Overview
          </li>
          <li style={listItemStyle}>
            <span style={bulletStyle}></span>Projects
          </li>
        </ul>
      </div>
      <div style={containerStyle}>
        <div style={tabsStyle}>
          <span style={activeTabStyle}>Dashboards</span>
        </div>
        <ul style={listStyle}>
          <li style={activeListItemStyle}>
            <img src={rectangle} />
            <img src={piChart} />
            Default
          </li>
          <li style={listItemStyle}>
            <img src={arrowRight} alt="" className="arrowClass"/>
            <img src={cart} />
            eCommerce
          </li>
          <li style={listItemStyle}>
            <img src={arrowRight} className="arrowClass"/>
            <img src={folder} alt="" />
            Projects
          </li>
          <li style={listItemStyle}>
            <img src={arrowRight} className="arrowClass"/>
            <img src={book} alt="" />
            Online Courses
          </li>
        </ul>
      </div>
      <div style={containerStyle}>
      <div style={tabsStyle}>
          <span style={activeTabStyle}>Pages</span>
        </div>
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
            {open ? <img src={arrowDown} className="arrowClass" /> : <img src={arrowRight} className="arrowClass"/>}
              <img src={userProfile} />
            </ListItemIcon>
            <ListItemText primary="User Profile" />
            
          </ListItem>
        </List>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              {" "}
               
              <ListItemText primary="Overview" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Campaigns" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Documents" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Followers" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemIcon>
          {open ? <img src={arrowDown} className="arrowClass" /> : <img src={arrowRight} className="arrowClass"/>}
            <img src={account} className="arrowClass"/>
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          {open ? <img src={arrowDown} className="arrowClass" /> : <img src={arrowRight} className="arrowClass"/>}
            <img src={corporate} className="arrowClass"/>
          </ListItemIcon>
          <ListItemText primary="Corporate" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          {open ? <img src={arrowDown} className="arrowClass" /> : <img src={arrowRight} className="arrowClass"/>}
            <img src={blog} className="arrowClass"/>
          </ListItemIcon>
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          {open ? <img src={arrowDown} className="arrowClass" /> : <img src={arrowRight} className="arrowClass"/>}
            <img src={social} className="arrowClass"/>
          </ListItemIcon>
          <ListItemText primary="Social" />
        </ListItem>
      </div>
    </div>
  );
};

export default Sidebar;

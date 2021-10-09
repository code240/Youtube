import React from "react";
import { useHistory } from "react-router-dom";
import "./CSS/Navbar.css";

const Navbar = (prop) => {
setTimeout(()=>{
  if(prop.active==="opt1"){
    document.getElementById("opt1").classList.add("active");
    document.getElementById("opt2").classList.remove("active");
    document.getElementById("opt3").classList.remove("active");
  }
  if(prop.active==="opt2"){
    document.getElementById("opt2").classList.add("active");
    document.getElementById("opt1").classList.remove("active");
    document.getElementById("opt3").classList.remove("active");
  }
  if(prop.active==="opt3"){
    document.getElementById("opt3").classList.add("active");
    document.getElementById("opt2").classList.remove("active");
    document.getElementById("opt1").classList.remove("active");
  }
},100);
  const history = useHistory();
  return (
    <>
      <nav className="my-navbar" id="navbar">
        <div className="parent-of-all-btn-in-navbar">
          <div className="btn-three-main-div">
            <span className="icons icon-1 active" id="opt1"  onClick={()=>history.push("/")}>
              <i className="fas fa-home large"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Home
            </span>
            <span className="icons icon-1" id="opt2" onClick={()=>history.push("/explore")}>
              <i className="far fa-compass large" ></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Explore
            </span>
            <span className="icons icon-1">
              <i className="fas fa-film large"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Subscription
            </span>
          </div>
          <div className="btn-five-main-div">
            <span className="icons icon-1"  id="opt3" onClick={()=>history.push("/library")}>
              <i className="fas fa-photo-video large"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Library
            </span>
            <span className="icons icon-1">
              <i className="fas fa-history large"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; History
            </span>
            <span className="icons icon-1">
              <i className="far fa-play-circle large"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Your History
            </span>
            <span className="icons icon-1">
              <i className="far fa-clock large"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Watch Later
            </span>
            <span className="icons icon-1">
              <i className="far fa-thumbs-up large"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Liked Video
            </span>
            <span className="icons icon-1">
              <i className="fas fa-chevron-down"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Show more
            </span>
          </div>
          <div className="btn-five-main-div more-icon-div">
            <span className="icons navbar-heading-text">More From Youtube</span>
            <span className="icons icon-1">
              <i className="fab fa-youtube large"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Youtube Premium
            </span>
            <span className="icons icon-1">
              <i className="fas fa-film large"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Movies
            </span>
            <span className="icons icon-1">
              <i className="fas fa-gamepad large"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gaming
            </span>
            <span className="icons icon-1">
              <i className="fas fa-satellite-dish large"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Live
            </span>
            <span className="icons icon-1">
              <i className="far fa-laugh large"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Fashion & Beauty
            </span>
            <span className="icons icon-1">
              <i className="far fa-lightbulb large"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Learning
            </span>
            <span className="icons icon-1">
              <i className="fas fa-trophy large"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sports
            </span>
          </div>
          <div className="btn-five-main-div">
            <span className="icons icon-1">
              <i className="fas fa-cog large"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Setting
            </span>
            <span className="icons icon-1">
              <i className="far fa-flag large"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Report history
            </span>
            <span className="icons icon-1">
              <i className="far fa-question-circle large"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Help
            </span>
            <span className="icons icon-1">
              <i className="fas fa-exclamation-circle large"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Send feedback
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

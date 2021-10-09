import React from "react";
import { useHistory } from "react-router-dom";
import "./CSS/MobiNavbar.css";
const MobiNavbar = (prop) => {
  const history = useHistory();
  setTimeout(()=>{
    if(prop.active==="opt1"){
      document.getElementById("mobi-opt1").classList.remove("material-icons-outlined");
      document.getElementById("mobi-opt2").classList.add("material-icons-outlined");
      document.getElementById("mobi-opt3").classList.add("material-icons-outlined");
    }
    if(prop.active==="opt2"){
      document.getElementById("mobi-opt2").classList.remove("material-icons-outlined");
      document.getElementById("mobi-opt1").classList.add("material-icons-outlined");
      document.getElementById("mobi-opt3").classList.add("material-icons-outlined");
    }
    if(prop.active==="opt3"){
      document.getElementById("mobi-opt3").classList.remove("material-icons-outlined");
      document.getElementById("mobi-opt2").classList.add("material-icons-outlined");
      document.getElementById("mobi-opt1").classList.add("material-icons-outlined");
    }
  },100);
  return (
    <>
      <div className="mobiNavbar" id="mobiNavbar">
        <div className="mobi-nav-icon-div"  onClick={()=>history.push("/")}>
          <span className="icon-home-mobi">
          <span className="icon-home-mobi home-icon-1 material-icons" id="mobi-opt1">
            home
          </span>
            <span className="mobi-nav-icon-text  mobi-nav-text-1">Home</span>
          </span>
        </div>
        <div className="mobi-nav-icon-div" onClick={()=>history.push("/explore")}>
          <span className="icon-home-mobi">
          <span className="icon-home-mobi material-icons"  id="mobi-opt2">
            explore
          </span>
            <span className="mobi-nav-icon-text  mobi-nav-text-2">Explore</span>
          </span>
        </div>
        <div className="mobi-nav-icon-div "onClick={()=>history.push("/library")}>
          <span className="icon-home-mobi material-icons " id="mobi-opt3" >
            video_library
          </span>
          <span className="mobi-nav-icon-text mobi-nav-text-3">Library</span>
        </div>
      </div>
    </>
  );
};

export default MobiNavbar;

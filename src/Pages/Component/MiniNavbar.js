import React from 'react';
import { useHistory } from 'react-router-dom';
import "./CSS/Small-navbar.css";

const MiniNavbar = (prop) => {
    const history = useHistory();
    setTimeout(()=>{
        if(prop.active==="opt1"){
          document.getElementById("mini-opt-1").classList.add("active");
          document.getElementById("mini-opt-2").classList.remove("active");
          document.getElementById("mini-opt-3").classList.remove("active");
        }
        if(prop.active==="opt2"){
          document.getElementById("mini-opt-2").classList.add("active");
          document.getElementById("mini-opt-1").classList.remove("active");
          document.getElementById("mini-opt-3").classList.remove("active");
        }
        if(prop.active==="opt3"){
          document.getElementById("mini-opt-3").classList.add("active");
          document.getElementById("mini-opt-2").classList.remove("active");
          document.getElementById("mini-opt-1").classList.remove("active");
        }
      },100);
    return (
        <>
            <nav className="mini-navbar" id="mini-nav">
                <div className="mini-nav-div mini-nav-div-1" id="mini-opt-1"  onClick={()=>history.push("/")}>
                    <span className="mini-nav-icon">
                       <i className="fas fa-home"></i>
                    </span>
                    <span className="mini-nav-text">
                       Home
                    </span>
                </div>
                <div className="mini-nav-div mini-nav-div-1" id="mini-opt-2"  onClick={()=>history.push("/explore")}>
                    <span className="mini-nav-icon">
                    <i className="far fa-compass"></i>
                    </span>
                    <span className="mini-nav-text">
                       Explore
                    </span>
                </div>
                <div className="mini-nav-div mini-nav-div-1" id="mini-opt-3"  onClick={()=>history.push("/library")}>
                    <span className="mini-nav-icon">
                        <i className="fas fa-photo-video"></i>
                    </span>
                    <span className="mini-nav-text">
                       Library
                    </span>
                </div>
            </nav>
            
        </>
    )
}

export default MiniNavbar;

import React from "react";
import "./CSS/mobi-header.css";

const MobiHeader = () => {
  const search_show = () => {
    document.getElementById("search-header").style.display = "block";
    document.getElementById("search-mobi-text").focus();
    document.getElementById("mobi-header").style.display = "none";
    document.getElementById("layer-search").style.display = "block";
    
  }
  return (
    <>
      <div className="mobi-header" id="mobi-header">
        <div className="for-logo-and-bar-mobi">
          <div className="for-logo-mobi">
            <img src="media/yt.png" alt="youtube" className="yt-logo-mobi" onClick={()=>window.location.reload()} />
          </div>
        </div>
        <div className="for-search-and-user">
          <div className="for-search-icon" onClick={()=>search_show()}>
            <span className="material-icons mobi-search-icon">
              search
            </span>
          </div>
          <div className="for-user-image-mobi">
            <div className="for-user-image-main-mobi">
                <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png" alt="yt-user" className="user-img-mobi" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobiHeader;

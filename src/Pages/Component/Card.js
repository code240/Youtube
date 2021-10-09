import React from "react";
import "./CSS/Body.css";

const Card = (props) => {
  return (
    <>
      {props.videos.map((cardVideo) => {
        return (
          <a href={cardVideo.link} rel="noreferrer" target="_blank" style={{textDecoration:"none"}} >
          <div className="vid-card" key={cardVideo.vid_id} >
            <div className="template-img" id={cardVideo.card_id}>
            <div className="video-length">
                {cardVideo.length}
              </div>
              <img
                src={cardVideo.img}
                alt="video-template"
                className="video-template-img"
              />
              
            </div>
            <div className="logo-title">
              <div className="for-logo-card">
                <div className="main-for-logo">
                  <img
                    src={cardVideo.channel_logo}
                    alt="creater-channel-logo"
                    className="creater-channel-logo"
                  />
                </div>
              </div>
              <div className="for-title-card">
                <span className="video-title ">
                  {cardVideo.title}
                </span>
                <span className="channel-name-card " id="channel-name">{cardVideo.channel_name}</span>
                <span className="channel-name-card" id="videos-views">
                  {cardVideo.views} views &middot; {cardVideo.time}
                </span>
                <span className="mobi-channel-info text-truncate" id="mobi-channel-info">
                  {cardVideo.channel_name} <b>&middot;</b> {cardVideo.views} views <b>&middot;</b> {cardVideo.time} 
                </span>
              </div>
            </div>
          </div>
          </a>
        );
      })}
    </>
  );
};

export default Card;

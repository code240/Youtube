import React from 'react';
import "./CSS/explore.css";

const ExploreBody = () => {
    return (
        <>
            <div className="yt-body explore-body" id="yt-body">
                <i className="far fa-dizzy sad-emoji"></i>
                {/* <span class="material-icons sad-emoji">sentiment_dissatisfied</span> */}
                <span className="nothing-to-show">
                    Nothing to show here 
                </span>
                <span className="nothing-to-show-second">
                    Actually you are visiting youtube clone. Please visit youtube to eplore more videos
                </span>
                <a href="https://www.youtube.com/feed/explore" target="_blank"  rel="noreferrer" style={{textDecoration:"none"}}>
                <button className="btn visit-youtube-btn">Visit Youtube</button>
                </a>
            </div>
        </>
    )
}

export default ExploreBody;

import React from 'react';
import "./CSS/library.css";

const LibraryBody = () => {
    return (
        <>
             <div className="yt-body explore-body library-body" id="yt-body">
                <div className="library-gate">
                    <img src="https://m.youtube.com/static/sign_in_promo.png" alt="yt-library" className="yt-library-gate" />
                </div>
                {/* <span class="material-icons sad-emoji">sentiment_dissatisfied</span> */}
                <span className="nothing-to-show library-text">
                    You are not signed in 
                </span>
                <span className="nothing-to-show-second">
                Sign in now to upload, save, and comment on videos
                </span>
                <a href="https://m.youtube.com/feed/library" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}><button className="btn visit-youtube-btn library-btn">Sign in on Youtube</button></a>
            </div>
        </>
    )
}

export default LibraryBody;

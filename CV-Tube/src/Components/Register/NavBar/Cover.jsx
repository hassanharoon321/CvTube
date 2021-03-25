import React from 'react';
import Cov from "../assests/free.png";
import "../css/Login/Cover.css"

function Cover() {
    return (
        <div className="image-work">
            <img src={Cov} alt="" width="1200px" height="600px"className="image-cov"/>
        </div>
    )
}

export default Cover;

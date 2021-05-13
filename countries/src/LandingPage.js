import React from 'react'
import "./LandingPage.css"
import {Link} from "react-router-dom";
export  const LandingPage = () => {
    return (
        <div className="landing">
            <Link to="Countries"> 
            <button className="button"><strong>Search your Country</strong></button>
            </Link>
            
        </div>
    )
}

export default LandingPage;
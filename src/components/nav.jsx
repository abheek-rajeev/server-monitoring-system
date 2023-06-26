import React from "react";
import { Link } from "react-router-dom";
function Nav(){
    return(
    <div className="navbar">
        <div className="logo">Dashboard</div>
        <ul className="navbar-menu">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
        </ul>
    </div>
    )
}
export default Nav;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {
    return (

        <div className="navbar">
            <div className="logo">
                <Link to="home">
                    <h2>BookSearch</h2>
                </Link>
            </div>
            <div className="nav_list">
                <ul>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="contributors">Contributors</Link>
                    </li>
                    <li>
                        <Link to="api_docs">API Docs</Link>
                    </li>
                    <li>
                        <Link to="sign_up">Sign up</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
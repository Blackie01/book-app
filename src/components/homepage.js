import React from "react";
import "./homepage.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {useState, useEffect} from'react'


function Homepage({showCase, showMain}) {

  return (
    <section className="overall-homepage-section">
      <nav className="navigation-bar">
        <h2>BookSearch</h2>
        <section>
          <ul className="nav-right">
            <li>About</li>
            <li>Contributors</li>
            <li>API docs</li>
            <li>Sign up</li>
          </ul>
        </section>
      </nav>

      <section className="overall-homepage-body">
        <section className="jumbo-text-section">
          <div className="wrap-text">
            <h1 className="main-text">
              Search <br className="brbr"/> the internet <br /> for books
            </h1>
            <p>
              Get 1,000,000 books without breaking a sweat. <br /> Type! Our
              algorithm does the rest.
            </p>
          </div>

          <div>
            <form>
              
              <div className="search-bar" type="text">
              <input className="search-bar" placeholder="enter a title" type="text" onChange={showMain}/> 

              
              <img className="searchIcon" src="https://img.icons8.com/sf-ultralight/25/b1c9ad/search.png"/>
              
  
              </div> 

            </form>
          </div>
          <Link to="/moreinfo" className="more" onClick = {showCase}>
        Click Here
          </Link>
        </section>

        <section className="jumbo-images-section">
          <div className="image1">
            <img src="https://images.pexels.com/photos/4626360/pexels-photo-4626360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>

          <div className="image2">
            <img src="https://images.pexels.com/photos/1191529/pexels-photo-1191529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>

          <div className="image3">
            <img src="https://images.pexels.com/photos/1340588/pexels-photo-1340588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>

          <div className="image4">
            <img src="https://images.pexels.com/photos/5301703/pexels-photo-5301703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
        </section>
      </section>
    </section>
  );
}

export default Homepage;

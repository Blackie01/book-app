import React from "react";
import "./homepage.css";

function Homepage() {
  return (
    <section>
      <nav className="navigation-bar">
        <h2>BookSearch</h2>
        <section>
          <ul className="nav-right">
            <li>About</li>
            <li>Contributors</li>
            <li>API docs</li>
          </ul>
        </section>
      </nav>

      <section className="overall-homepage-body">
        <section className="jumbo-text-section">
            <div className="wrap-text">
            <h1 className="main-text">
            Search the internet <br /> for books
          </h1>
          <p>
            Get 1,000,000 books without breaking a sweat. <br /> Type! Our
            algorithm does the rest.
          </p>
            </div>
         
            <div>
                <form>
                <input className="search-bar" type="text"/>
                </form>
                
            </div>
        </section>

        <section className="jumbo-images-section">

        </section>
      </section>
    </section>
  );
}

export default Homepage;

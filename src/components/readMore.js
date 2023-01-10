import React from "react";
import "./readMore.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function ReadMore() {

  let { id } = useParams ()

  const DataLocalStore = JSON.parse(localStorage.getItem("booksData"))
  const shopLocalData = DataLocalStore?.filter((idf) => idf.id == id)
  console.log(shopLocalData)

  return (
    <section className="overall-read-more-container">
      <nav className="navigation-bar">
        <Link className="logoName" to="/homepage">
          <h2>BookSearch</h2>
        </Link>
        <section>
          <ul className="nav-right">
            <li>About</li>
            <li>Contributors</li>
            <li>API docs</li>
          </ul>
        </section>
      </nav>

      <section className="read-more-container">
        <h1>This is the read more page</h1>
      </section>
    </section>
  );
}

export default ReadMore;

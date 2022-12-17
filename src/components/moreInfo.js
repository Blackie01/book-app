import React from 'react'
import "./moreInfo.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const MoreInfo = ({Books}) => {
    let booksArray = Books.items
    //console.log(Books);
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
        <div className="books-container">
        {booksArray.map((book, i) => (
              <div className='books' key={i} >
                  <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" />
                  <h2>{book.volumeInfo.title}</h2>
                  <button className="read-more">
                      <Link to="/moreinfo">
                        Read More
                      </Link>
                  </button>
              </div>
            ))}
        </div>
    </section>
  )
}

export default MoreInfo


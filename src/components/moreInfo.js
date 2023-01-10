import React from "react";
import "./moreInfo.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "./pagination";
import altBook from "../assets/alt-book-image.jpeg";


const MoreInfo = ({ Books }) => {

  localStorage.setItem("booksData", JSON.stringify(Books));


    let booksArray = Books.items
  //console.log(booksArray);
  
    //States for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [BooksPerPage] = useState(10);

  //Pagination Variables
  const indexOfLastBooks = currentPage * BooksPerPage;
  const indexOfFirstBooks = indexOfLastBooks - BooksPerPage;
  const currentBooks = booksArray?.slice(indexOfFirstBooks, indexOfLastBooks);


    //console.log(currentBooks)
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)

  };
;
  return (
    <section className='overall-books-container'>
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
      <div className="books-container">
        {currentBooks.map((book, i) => (

              <div className='books' key={i} >
                  {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail} alt="book"/> : <h4 className='image-h'>Image not available</h4> }
                  <h2>{book.volumeInfo.title}</h2>
                  <Link to="/readMore">
                  <button className="read-more">
                      
                        Read More
                  </button>
                  </Link>

              </div>
            ))}
        </div>
        <Pagination
          Books = {booksArray}
          totalBooks= {booksArray?.length}
          currentPage = {currentPage}
          BooksPerPage = {BooksPerPage}
          paginate = {paginate}
        />

    </section>
  );
};

export default MoreInfo;

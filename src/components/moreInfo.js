import React from 'react'
import "./moreInfo.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Pagination from './pagination';

const MoreInfo = ({Books}) => {
    let booksArray = Books.items
  console.log(booksArray);
    //States for pagination

    const [currentPage, setCurrentPage] = useState(1);
    const [BooksPerPage] = useState(10);
    

    //Pagination Variables
    const indexOfLastBooks = currentPage * BooksPerPage;
    const indexOfFirstBooks = indexOfLastBooks - BooksPerPage;
    const currentBooks = booksArray?.slice(indexOfFirstBooks, indexOfLastBooks);

    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
  };

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
        {currentBooks.map((book, i) => (
              <div className='books' key={i} >
                  <img src={book.volumeInfo.imageLinks.thumbnail} alt="book" key={i}/>
                  <h2>{book.volumeInfo.title}</h2>
                  <button className="read-more">
                      <Link to="/moreinfo">
                        Read More
                      </Link>
                  </button>
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
  )
}

export default MoreInfo


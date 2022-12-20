import React from 'react'
import "./pagination.css";
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Pagination = ({Books, totalBooks, BooksPerPage, currentPage, paginate}) => {
    const pageNumbers = [];


    for (let i = 1; i <= Math.ceil(totalBooks / BooksPerPage); i++) {
        pageNumbers.push(i);
    }
  return (
    <nav>
      <ul className="page-ul">
        {pageNumbers.map((number) => (
            <a className="pagination-anchor" onClick={ () => paginate(number)} href="#" key={number}>
                <li className='page-li'>
              {number}
                </li> 
            </a>
        ))}
        
      </ul>
    </nav>
  )
}

export default Pagination

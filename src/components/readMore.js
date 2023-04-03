import React from "react";
import "./readMore.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

import Payment from "./payment";


const ReadMore = () => {

  let { id } = useParams ()

  const DataLocalStore = JSON.parse(sessionStorage.getItem("booksData"))
  const shopLocalData = DataLocalStore?.filter((idf) => idf.id === id)
  //console.log(shopLocalData)
  //console.log(DataLocalStore);

  // making nav responsive with useState
const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="overall-read-more-container">

<nav className="navigation-bar">
        <Link className="logoName" to="/homepage">
          <h2>BookSearch</h2>
        </Link>
        <section className="hamburger-text">
          <ul className="nav-right">
            <li>About</li>
            <li>Contributors</li>
            <li>API docs</li>
            <li>Sign up</li>
          </ul> 
        </section>

        <section className="responsive-menu"
        onClick = {() => setIsOpen(!isOpen)}
        >
          <div className="resp-menu"></div>
          <div className="resp-menu"></div>
          <div className="resp-menu"></div>

        {isOpen && (
          <>
           <div className="overlay" onClick={() => setIsOpen(false)}></div>
          <ul className="responsive-nav">
            <li>About</li>
            <li>Contributors</li>
            <li>API docs</li>
            <li>Sign up</li>
          </ul>
          </>

        )}
        </section>
      </nav>

      <section className="read-more-container">
          {shopLocalData[0].volumeInfo.imageLinks ? <img src={shopLocalData[0].volumeInfo.imageLinks.thumbnail} alt="book"/> : <h4 className='image-h'>Image not available</h4> }
          <div className="text-div-read-more">
            <h1> <strong>Title: </strong> { shopLocalData[0].volumeInfo.title }</h1>
            <h1> <strong> Language: </strong> { shopLocalData[0].volumeInfo.language }</h1>
            <h1> <strong> Author(s): </strong> { shopLocalData[0].volumeInfo.authors }</h1>
            <h1> <strong> Rating: </strong> { shopLocalData[0].volumeInfo.averageRating }</h1>
            <h1> <strong> Category: </strong> { shopLocalData[0].volumeInfo.categories }</h1>
            <h1> <strong> Page Count: </strong> { shopLocalData[0].volumeInfo.pageCount }</h1>
            <h1> <strong> Release Date : </strong> { shopLocalData[0].volumeInfo.publishedDate }</h1>
            {/* {shopLocalData[0].searchInfo ? <h1> <strong>: </strong> { shopLocalData[0].searchInfo.textSnippet }</h1> : <strong></strong> } */}
            <h1> <strong> Publisher: </strong> { shopLocalData[0].volumeInfo.publisher }</h1>
            <h1> <strong> Version : </strong> { shopLocalData[0].volumeInfo.contentVersion }</h1>
            <h1>  Price: #<strong>5000</strong></h1>
            <button className="purchase-button"><a href="https://paystack.com/pay/my-book-app">PURCHASE</a></button>
          </div>
          
      </section>
      {/* <Payment />
      <div className=""> <em>NOTE : </em>This is a test payment structure which doesn't accept original card details, so you are not expected to input your card details. Thank you </div> */}
    </section>
  );
}

export default ReadMore;

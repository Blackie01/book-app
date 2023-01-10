import React from "react";
import "./readMore.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const ReadMore = () => {

  let { id } = useParams ()

  const DataLocalStore = JSON.parse(localStorage.getItem("booksData"))
  const shopLocalData = DataLocalStore?.filter((idf) => idf.id == id)
  console.log(shopLocalData)

  // let { id } = useParams();

  // const ReadMoreData = JSON.parse(localStorage.getItem("repoData"));
  // const finalData = ReadMoreData?.filter((idf) => idf.id == id);
  // // console.log(finalData);
  // //console.log(finalData);
  // console.log(ReadMoreData);

  return (
    <section className="overall-read-more-container">
      {/* <nav className="navigation-bar">
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
      </nav> */}

      <section className="read-more-container">
          {shopLocalData[0].volumeInfo.imageLinks ? <img src={shopLocalData[0].volumeInfo.imageLinks.thumbnail} alt="book"/> : <h4 className='image-h'>Image not available</h4> }
          <div>
            <h1>{ shopLocalData[0].volumeInfo.title }</h1>
            <h1>{ shopLocalData[0].volumeInfo.language }</h1>
            <h1>{ shopLocalData[0].volumeInfo.authors }</h1>
            <h1>{ shopLocalData[0].volumeInfo.averageRating }</h1>
            <h1>{ shopLocalData[0].volumeInfo.categories }</h1>
            <h1>{ shopLocalData[0].volumeInfo.pageCount }</h1>
            <h1>{ shopLocalData[0].volumeInfo.publishedDate }</h1>
            <h1>{ shopLocalData[0].searchInfo.textSnippet }</h1>
            <h1>{ shopLocalData[0].volumeInfo.publisher }</h1>
            <h1>{ shopLocalData[0].volumeInfo.contentVersion }</h1>
          </div>
      </section>
    </section>
  );
}

export default ReadMore;

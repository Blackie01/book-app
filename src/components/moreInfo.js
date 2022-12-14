import React from 'react'
import "./moreInfo.css";
import { useEffect, useState } from 'react';

const MoreInfo = () => {
    const [Books, setBooks] = useState([]);
    // const apiCall = () =>{
    //     fetch("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBuwxHeRrb6JhyDAHqCq8lkWWazlbquHxM")
    //     .then((response) => response.json())
    //     .then((data) => { setBooks(data)
    //         //console.log(Books);
    //     })
    //   }

      const apiCall=()=>{
        fetch("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBuwxHeRrb6JhyDAHqCq8lkWWazlbquHxM")
        .then ((response) => response.json())
        .then((data)=>setBooks(data))
     }
     
     
     useEffect (()=>apiCall(), [])
      console.log(Books);
      //useEffect(() => {apiCall()},  []);
    //console.log(Books);
    //https:www.googleapis.com/books/v1/volumes?q=Things fall apart&key=AIzaSyBuwxHeRrb6JhyDAHqCq8lkWWazlbquHxM
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
        {/* {Books.map((book, i) => (
              <div key={i} >
                  
                  <h2>{book.volumeInfo.title}</h2>
              </div>
            ))} */}
        </div>
    </section>
  )
}

export default MoreInfo

{/* <Link className='repo-link' style={{color:'white'}} to={`/apicall/${user.id}`} >{user.git_url}/</Link> */}
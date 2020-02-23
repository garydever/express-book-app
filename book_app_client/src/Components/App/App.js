import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { ReadingList } from '../ReadingList/ReadingList';
import { BookList } from '../BookList/BookList';

const baseUrl = 'https://dry-temple-74265.herokuapp.com';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItems: 0,
      booklist: [],
      latestBook: null
    }
    this.search = this.search.bind(this);
    this.addToList = this.addToList.bind(this);
      }

  async search(term) {
    const queryString = `https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=40`;
    let bookArray = [];
    const response = await fetch(queryString);
    const jsonResponse = await response.json();
    if (!jsonResponse.items) {
      return;
    }
    const totalItems = jsonResponse.totalItems;
    jsonResponse.items.forEach(book => {
      if (book.volumeInfo.title && 
        book.volumeInfo.authors &&
        book.volumeInfo.imageLinks &&
        book.volumeInfo.publisher) {
          bookArray.push(book);
        }
      });
      this.setState({totalItems: totalItems, booklist: bookArray})
  }


  
  async addToList(book) {
    const url = `${baseUrl}/readingList`;
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"book": {
        "title": book.volumeInfo.title,
        "author": book.volumeInfo.authors[0],
        "publisher": book.volumeInfo.publisher,
        "img": book.volumeInfo.imageLinks.thumbnail}})
        }
    await fetch(url, fetchOptions)
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
    })
    .catch(error => {
      console.error('Error:', error);
    });
    this.setState({latestBook: book});
    }





  render() {
    return (
      <div>
        <div className="intro">
          The purpose of this app is to demonstrate a RESTful API in action. 
          The "Search" button will return a list of books from the GoogleBooks API. 
          The "Add to list" button will send a POST request to the server (hosted by Heroku), 
          adding the book to the database. The server will automatically rerender the 
          user's readinglist with a GET request. The books on the reading list are 
          marked as "Not yet read" until the user presses the "Finished reading" button. 
          This sends a PUT request to the server to update the status of the book. The 
          user can then DELETE the book from the database by hitting the "Remove book" button.
          <br/>Contact: garythomasdever@gmail.com || <a href="http://github.com/garydever">github</a>
        </div>
      <div className="app-main-container">
        <div className="vertical">
          <div className="search-bar-component">
            <SearchBar onSearch={this.search} />
          </div>
          <div className="reading-list-component">
            <ReadingList 
            latestBook={this.state.latestBook}/>
          </div>
        </div>
        <div className="search-results-component">
          <BookList 
          searchResults={this.state.booklist}
          onAdd={this.addToList}
          />
        </div>
      </div>
      </div>
    )
  }
}


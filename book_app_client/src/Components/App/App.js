import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { ReadingList } from '../ReadingList/ReadingList';
import { BookList } from '../BookList/BookList';



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
    const url = `http://localhost:4000/readingList`;
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
    )
  }
}


import React from 'react';
import { Book } from '../Book/Book';
import './BookList.css'

export class BookList extends React.Component {
    render() {
        return (
            <div className="booklist">
                {
                    this.props.searchResults.map(book => 
                        <Book
                        book={book} 
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors[0]}
                        src={book.volumeInfo.imageLinks.thumbnail}
                        publisher={book.volumeInfo.publisher} 
                        onAdd={this.props.onAdd}
                        />
                    )
                }
   
            </div>
        )
    }
}
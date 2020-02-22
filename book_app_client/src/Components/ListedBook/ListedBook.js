import React from 'react';
import './ListedBook.css';

export class ListedBook extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
        this.removeBook = this.removeBook.bind(this);
    }

    markAsRead() {
        this.props.markAsRead(this.props.id);
    }

    removeBook() {
        this.props.removeBook(this.props.id);
    }
   
    render() {
        return (
            <div className="book-container">
                <img src={this.props.img} alt={this.props.title}/>
                <div className="bookTitle">{this.props.title}</div>
                <div>{this.props.author}</div>
                <div className="bookPublisher">{this.props.publisher}</div>
                {this.props.isRead === 1 && <div className="hasRead">I've read this book!</div>}
                {this.props.isRead === 0 && <div className="hasNotRead">Not read yet</div>}
                {this.props.isRead === 0 && <button 
                onClick={this.markAsRead}>Finished Reading?
                </button>}
                {this.props.isRead === 1 && <button 
                onClick={this.removeBook}>Remove book
                </button>}
            </div>
        );
    }
}
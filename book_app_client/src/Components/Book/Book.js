import React from 'react';
import './Book.css';

export class Book extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.onAdd(this.props.book);
    }

    render() {
        return (
            <div className='book-container'>
                <img src={this.props.src} alt={this.props.title}/>
                <div className="bookTitle">{this.props.title}</div> 
                <div className="bookAuthor">{this.props.author}</div>
                <div className="bookPublisher">{this.props.publisher}</div>
                <button onClick={this.handleClick}>Add to list</button>
            </div>
        )
    }
}
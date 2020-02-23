import React from 'react';
import './ReadingList.css';
import { ListedBook } from '../ListedBook/ListedBook';
 
const baseUrl = 'https://dry-temple-74265.herokuapp.com';

export class ReadingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
            latestBook: null
        };
        this.markAsRead = this.markAsRead.bind(this);
        this.removeBook = this.removeBook.bind(this);
    }

    componentDidMount() {
        fetch(`${baseUrl}/readingList`)
            .then(response => response.json())
            .then(result => {
                this.setState({
                isLoaded: true,
                items: result.bookList
                })}) 
    }

    componentDidUpdate(prevState) {
        if (this.props.latestBook !== prevState.latestBook) {
            this.setState({latestBook: this.props.latestBook});
            this.componentDidMount();
        }
    }
 
    async markAsRead(bookId) {
        const url = `${baseUrl}/readingList/${bookId}`;
        const fetchOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"book": {
            "is_read": 1}})
            }
        await fetch(url, fetchOptions)
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch(error => {
        console.error('Error:', error);
        });
        this.componentDidMount(); 
        }

    async removeBook(bookId) {
        const url = `${baseUrl}/readingList/${bookId}`;
        const fetchOptions = {
          method: 'DELETE'
        }
        await fetch(url, fetchOptions);
        this.componentDidMount()
    }

    render() { 
        if (!this.state.isLoaded) {
            return <div>Loading readinglist...</div>;
        } else {
            return (<div className="readingList-container">
                {this.state.items.length > 0  && <h1>My reading list:</h1>}
                <div className="readingList">
                {this.state.items.map(item => {
                    return <ListedBook 
                    key={item.id}
                    id={item.id}
                    title={item.title} 
                    author={item.author}
                    publisher={item.publisher}
                    img={item.img} 
                    isRead={item.is_read}
                    markAsRead={this.markAsRead}
                    removeBook={this.removeBook}
                    />    
                })}
                </div>
                
            </div>);
        }
    }
                  
    }

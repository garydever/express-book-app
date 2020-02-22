import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleTermChange(e) {
        this.setState({term: e.target.value });
        e.preventDefault();
    }

    handleSearch() {
        this.props.onSearch(this.state.term);
    }

    render() {
        return (
            <div className="searchBar">
            
                <h1 className="searchTitle">Search for books</h1>
                <input
                className="searchInput" 
                type="text"
                placeholder="Search by title, author, subject..." 
                onChange={this.handleTermChange}/>
                <button
                className="searchButton" 
                type="submit"
                onClick={this.handleSearch}>
                    Search
                </button>
            
            </div>
        )
    }
}
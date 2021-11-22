import React, {Component} from "react";
import BooksGrid from "./BooksGrid";
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';

class SearchPage extends Component {

    state = {
        query: '',
        results: [],
    }

    getBooks = query => {
        BooksAPI.search(query)
        .then(results => {
            this.setState({ results });
        })
    }
    
    handleChange = event => {
        this.setState({ query: event.target.value });
        this.getBooks(this.state.query);
        if (this.state.results !== undefined && this.state.results.length > 0) {
            this.props.books.forEach(book => this.checkResults(book));
        }
        console.log(this.state.results);
        console.log(this.state.query);
    }

    checkResults = book => {
        this.state.results.forEach(result => {
            if (result.id === book.id) {
                result["shelf"] = book.shelf;
            }
        })
    }
    
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                        type="text"
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={this.handleChange} />
                    </div>
                </div>
                <div className="search-books-results">
                    {
                        this.state.results === undefined
                        ? ''
                        : this.state.results.length === 0
                        ? ''
                        : <BooksGrid books={this.state.results} onUpdateBookShelf={this.props.onUpdateBookShelf} />
                    }
                </div>
          </div>
        )
    }
}

export default SearchPage;
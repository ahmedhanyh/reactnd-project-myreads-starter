import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BooksGrid from "./BooksGrid";
import PropTypes from "prop-types";

class SearchPage extends Component {

    static propTypes = {
        booksInShelves: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired,
    }
    
    state = {
        query: '',
        results: [],
        noResultsAvailable: false,
    }

    searchBooks = query => {
        BooksAPI.search(query)
        .then(results => {
            if (!results || !Array.isArray(results) || results.length === 0) {
                this.setState({ noResultsAvailable: true })
            } else {
                this.setState({ results, noResultsAvailable: false })
            }
        })
    }

    handleInputChange = event => {
        const { target } = event;
        this.setState({ query: target.value.trim() });
        this.searchBooks(this.state.query);
    }

    render() {
        const { booksInShelves, onUpdateBookShelf } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/"><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.handleInputChange} />
                    </div>
                </div>
                <div className="search-books-results">
                    {
                        this.state.noResultsAvailable && (
                            "There aren't any results that match your query."
                        )
                    }
                    {
                        !this.state.noResultsAvailable && (
                            <BooksGrid books={this.state.results} booksInShelves={booksInShelves} onUpdateBookShelf={onUpdateBookShelf} />
                        )
                    }
                </div>
          </div>
        )
    }
}

export default SearchPage;
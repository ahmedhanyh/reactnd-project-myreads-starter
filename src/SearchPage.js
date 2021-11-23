import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BooksGrid from "./BooksGrid";
import PropTypes from "prop-types";

class SearchPage extends Component {

    static propTypes = {
        onUpdateBookShelf: PropTypes.func.isRequired,
    }
    
    state = {
        query: '',
        results: [],
    }

    searchBooks = query => {
        BooksAPI.search(query)
        .then(results => {
            for (let i = 0; i < results.length; i++) {
                let resultID = results[i].id;
                BooksAPI.get(resultID)
                .then(book => results[i]["shelf"] = book.shelf)
            }
            this.setState({ results })
        }).catch(error => console.log(error.name))
    }

    handleInputChange = event => {
        this.setState({ query: event.target.value });
        this.searchBooks(this.state.query);
    }
    
    render() {
        const { onUpdateBookShelf } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/"><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.handleInputChange} />
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksGrid books={this.state.results} onUpdateBookShelf={onUpdateBookShelf} />
                </div>
          </div>
        )
    }
}

export default SearchPage;
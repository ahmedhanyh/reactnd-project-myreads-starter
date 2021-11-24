import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import PropTypes from "prop-types";

class MainPage extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired,
    }

    render() {
        const { books, onUpdateBookShelf } = this.props;

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf shelfTitle="Currently Reading" shelfTitleCamelCased="currentlyReading" books={books} onUpdateBookShelf={onUpdateBookShelf} />
                <BookShelf shelfTitle="Want to Read" shelfTitleCamelCased="wantToRead" books={books} onUpdateBookShelf={onUpdateBookShelf} />
                <BookShelf shelfTitle="Read" shelfTitleCamelCased="read" books={books} onUpdateBookShelf={onUpdateBookShelf} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search"><button>Add a book</button></Link>
            </div>
          </div>
        )
    }
}

export default MainPage;
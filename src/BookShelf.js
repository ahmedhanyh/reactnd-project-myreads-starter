import React from "react";
import BooksGrid from "./BooksGrid";
import PropTypes from "prop-types";

const BookShelf = props => {

    const { shelfTitle, shelfTitleCamelCased, books, onUpdateBookShelf } = props;

    const filteredBooks = books.filter(book => book.shelf === shelfTitleCamelCased);

    return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">{ shelfTitle }</h2>
                <div className="bookshelf-books">
                <BooksGrid books={filteredBooks} booksInShelves={books} onUpdateBookShelf={onUpdateBookShelf} />
                </div>
            </div>
    )
}

BookShelf.propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    shelfTitleCamelCased: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired,
}

export default BookShelf;
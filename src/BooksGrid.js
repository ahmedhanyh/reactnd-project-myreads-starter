import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BooksGrid = props => {

    const { books, booksInShelves, onUpdateBookShelf } = props;

    return (
        <ol className="books-grid">
            {
                books.map(book => (
                    <Book key={book.id} book={book} booksInShelves={booksInShelves} onUpdateBookShelf={onUpdateBookShelf} />
                ))
            }
        </ol>
    )
}

BooksGrid.propTypes = {
    books: PropTypes.array.isRequired,
    booksInShelves: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired,
}

export default BooksGrid;
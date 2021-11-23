import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BooksGrid = props => {

    const { books, onUpdateBookShelf } = props;

    return (
        <ol className="books-grid">
            {
                books.map(book => (
                    <Book key={book.id} book={book} onUpdateBookShelf={onUpdateBookShelf} />
                ))
            }
        </ol>
    )
}

BooksGrid.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired,
}

export default BooksGrid;
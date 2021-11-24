import React from "react";
import PropTypes from "prop-types";

const BookShelfChanger = props => {

    const { id, booksInShelves, onUpdateBookShelf } = props;

    let currentShelf = "none";
    for (let book of booksInShelves) {
        if (book.id === id) {
            currentShelf = book.shelf;
            break;
        }
    }

    return (
        <select defaultValue={ currentShelf } onChange={ e => onUpdateBookShelf(e.target.value) } >
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    )
}

BookShelfChanger.propTypes = {
    id: PropTypes.string.isRequired,
    booksInShelves: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired,
}

export default BookShelfChanger;
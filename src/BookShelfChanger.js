import React from "react";
import PropTypes from "prop-types";

const BookShelfChanger = props => {

    const { bookShelf, onUpdateBookShelf } = props;

    return (
        <select defaultValue={ bookShelf } onChange={ e => onUpdateBookShelf(e.target.value) } >
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    )
}

BookShelfChanger.propTypes = {
    bookShelf: PropTypes.string.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired,
}

export default BookShelfChanger;
import React, { Component } from "react";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
    }

    updateBookShelf = shelf => {
        this.props.onUpdateBookShelf(this.props.book, shelf)
    }

    render() {
        const { book } = this.props;
        const { title, authors, imageLinks, shelf } = book;

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${!imageLinks ? "./img/No_image.png" : imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <BookShelfChanger bookShelf={ !shelf ? "none" : shelf } onUpdateBookShelf={ this.updateBookShelf } />
                    </div>
                    </div>
                    <div className="book-title">
                        {
                            !title ? "Untitled" : title
                        }
                    </div>
                    <div className="book-authors">
                        {
                            (!authors || authors.length === 0)
                            ? "Unknown"
                            : authors.join(", ")
                        }
                    </div>
                </div>
            </li>
        )
    }
}

export default Book;
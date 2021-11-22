import React, { Component } from "react";
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {

    updateBookShelf = shelf => {
        this.props.onUpdateBookShelf(this.props.book, shelf)
    }

    render() {

        const { book } = this.props;
        let { id, title, authors, imageLinks } = book;

        if (!title) {
            title = "Untitled";
        }

        return (
            <li key={id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                            style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks ? imageLinks.thumbnail : './img/No_Image.png'})` }}>
                        </div>
                        <BookShelfChanger
                        shelfName={this.props.shelfName}
                        onUpdateBookShelf={this.updateBookShelf} />
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors === undefined ? "Unknown" : authors.length === 0 ? "Unknown" : authors[0]}</div>
                </div>
            </li>
        )
    }
}

export default Book;
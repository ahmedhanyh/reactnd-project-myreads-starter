import React, { Component } from "react";
import Book from "./Book";

class BooksGrid extends Component {
    render() {

        const { books, shelfName } = this.props;

        return (
            <ol className="books-grid">
                {
                    books.filter(book => book.shelf === shelfName)
                        .map(book => (
                            <Book
                            key={book.id}
                            book={book}
                            shelfName={shelfName}
                            onUpdateBookShelf={this.props.onUpdateBookShelf} />
                        ))
                }
            </ol>
        )
    }
}

export default BooksGrid;
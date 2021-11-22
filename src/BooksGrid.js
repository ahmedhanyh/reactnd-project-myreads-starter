import React, { Component } from "react";

class BooksGrid extends Component {
    render() {

        const { books } = this.props;

        return (
            <ol className="books-grid">
                {
                    books.map(book => (
                        <Book title="" author="" coverURL="" />
                    ))
                }
            </ol>
        )
    }
}

export default BooksGrid;
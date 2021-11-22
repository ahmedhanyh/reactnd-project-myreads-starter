import React, { Component } from "react";

class BookShelfChanger extends Component {
    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={e => this.props.onUpdateBookShelf(e.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading" selected={this.props.shelfName === "currentlyReading"}>Currently Reading</option>
                    <option value="wantToRead" selected={this.props.shelfName === "wantToRead"}>Want to Read</option>
                    <option value="read" selected={this.props.shelfName === "read"}>Read</option>
                    <option value="none"
                        selected={this.props.shelfName !== "currentlyReading" && this.props.shelfName !== "wantToRead" && this.props.shelfName !== "read"}>
                        None
                    </option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger;
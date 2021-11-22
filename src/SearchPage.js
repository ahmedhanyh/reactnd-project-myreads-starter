import React, {Component} from "react";
import BooksGrid from "./BooksGrid";

class SearchPage extends Component {
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={this.props.updateState}>Close</button>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksGrid books={[]} />
                </div>
          </div>
        )
    }
}

export default SearchPage;
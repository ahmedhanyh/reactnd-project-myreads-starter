import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchPage from './SearchPage';
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
      this.setState({ books });
      console.log(this.state.books);
    })
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      BooksAPI.getAll()
      .then(books => {
        this.setState({ books })
      });
    });;
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage updateState={() => this.setState({ showSearchPage : false })} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf title="Currently Reading" books={this.state.books} shelfName="currentlyReading" onUpdateBookShelf={this.updateBookShelf} />                
                <BookShelf title="Want to Read" books={this.state.books} shelfName="wantToRead" onUpdateBookShelf={this.updateBookShelf} />
                <BookShelf title="Read" books={this.state.books} shelfName="read" onUpdateBookShelf={this.updateBookShelf} />
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp

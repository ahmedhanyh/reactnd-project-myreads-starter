import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchPage from './SearchPage';
import BookShelf from './BookShelf';
import { Link, Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
      this.setState({ books });
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
          <Route exact path="/" render={() => (
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
              <Link to="/search"><button>Add a book</button></Link>
            </div>
          </div>
          )} />
          <Route path="/search" render={() => (
            <SearchPage books={this.state.books} onUpdateBookShelf={this.updateBookShelf} />
          )} />
      </div>
    )
  }
}

export default BooksApp

import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchPage from './SearchPage';
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  // componentDidMount() {
  //   BooksAPI.getAll()
  //   .then(books => console.log(books))
  // }

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
                <BookShelf title="Currently Reading" books={[]} />                
                <BookShelf title="Want to Read" books={[]} />
                <BookShelf title="Read" books={[]} />
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

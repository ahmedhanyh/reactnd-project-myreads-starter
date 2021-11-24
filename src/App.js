import React from 'react'
import { Route } from 'react-router'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
        this.setState({ books })
    })
  }

  updateBookShelf = (book, shelf) => {
      BooksAPI.update(book, shelf)
      .then(() => {
          BooksAPI.getAll()
          .then(books => {
              this.setState({ books })
          })
      })
  }
  
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchPage booksInShelves={this.state.books} onUpdateBookShelf={this.updateBookShelf} />
        )} />
        <Route exact path="/" render={() => (
          <MainPage books={this.state.books} onUpdateBookShelf={this.updateBookShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp

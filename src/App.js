import React from 'react';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookList from './BookList';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  /**
  * @description Updates book shelf using API and updates the state
  * @param {Object} book - The book to update
  * @param {string} shelf - The new shelf for a book
  */
  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(shelves => {
      // invert shelves to have an assignment from book id to shelf
      const bookShelves = [];
      for (const [shelf, bookIds] of Object.entries(shelves)) {
        for (const bookId of bookIds) {
          bookShelves[bookId] = shelf;
        }
      }
      this.setState(state => {
        let books = state.books;
        const bookInBooks = books.find(b => b.id === book.id);
        if (!bookInBooks) {
          books.push(book);
        }
        books = books.map(b => Object.assign(b, {shelf: bookShelves[b.id] || 'none'}));
        return {books}
      });
    });
  }

  render() {
    const {books} = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookList 
            books={books}
            onUpdateBookShelf={this.updateBookShelf} 
          />
        )}/>
        <Route path="/search" render={() => (
          <Search 
            books={books}
            onUpdateBookShelf={this.updateBookShelf} 
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp

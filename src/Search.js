import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    foundBooks: []
  }

  updateQuery = (query) => {
    // TODO: timing!! (one after another)
    const trimmedQuery = query.trim();
    this.setState({
      query: trimmedQuery 
    })
    if (trimmedQuery) {
      BooksAPI.search(trimmedQuery, 100).then(foundBooks => {
        // apply shelf info from props.books
        foundBooks = foundBooks.map(foundBook => {
          const userBook = this.props.books.find(b => b.id === foundBook.id);
          if (userBook) {
            foundBook.shelf = userBook.shelf;
          }
          return foundBook;
        });
        this.setState({foundBooks});
      })
    } else {
      this.setState({foundBooks: []})
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
              type="text" 
              placeholder="Search by title or author" 
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.foundBooks.map(book => (
              <li key={book.id}>
                <Book 
                  book={book} 
                  onUpdateBookShelf={(shelf) => this.props.onUpdateBookShelf(book, shelf)}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;
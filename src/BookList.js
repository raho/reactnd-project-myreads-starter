import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import sortBy from 'sort-by';

const BookList = ({books, onUpdateBookShelf}) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf 
          title={'Currently Reading'} 
          books={books.filter(book => book.shelf === 'currentlyReading').sort(sortBy('title'))}
          onUpdateBookShelf={onUpdateBookShelf} 
        />
        <BookShelf 
          title={'Want to Read'} 
          books={books.filter(book => book.shelf === 'wantToRead').sort(sortBy('title'))} 
          onUpdateBookShelf={onUpdateBookShelf} 
        />
        <BookShelf 
          title={'Read'} 
          books={books.filter(book => book.shelf === 'read').sort(sortBy('title'))} 
          onUpdateBookShelf={onUpdateBookShelf} 
        />
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBookShelf: PropTypes.func.isRequired
};

export default BookList;
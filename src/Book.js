import React from 'react';
import PropTypes from 'prop-types';

const Book = ({book, onUpdateBookShelf}) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{
        width: 128, height: 192, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${book.imageLinks.thumbnail})`
      }}></div>
      <div className="book-shelf-changer">
        <select value={book.shelf || 'none'} onChange={(event) => onUpdateBookShelf(event.target.value)}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
  </div>
);

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBookShelf: PropTypes.func.isRequired
};

export default Book;
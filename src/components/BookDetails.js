import React, { useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext';

const BookDetails = ({ books }) => {
  const { removeBooks } = useContext(BooksContext);
  return (
    <li onClick={() => removeBooks(books.id)}>
      <div className="title">{books.title}</div>
      <div className="author">{books.author}</div>
    </li>
  );
}

export default BookDetails;
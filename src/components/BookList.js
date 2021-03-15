import React, { useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext';
import BookDetails from './BookDetails';


const BookList = () => {
    const {book} = useContext(BooksContext);
    return book.length ? (
        <div className="book-list">
            <ul>
            {book.map(books => {
                return ( <BookDetails books={books} key={books.id} /> );
            })}
            </ul>
        </div>
      ) : 
    (
        <div className="empty">
            No books to read. Hello free time :).
        </div>
    )
}

export default BookList;
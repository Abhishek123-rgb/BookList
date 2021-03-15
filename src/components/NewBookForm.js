import React, { useContext, useState } from 'react';
import { BooksContext } from '../contexts/BooksContext';

const NewBookForm = () => {
  const { addBooks } = useContext(BooksContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addBooks(title, author);
    setTitle('');
    setAuthor('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="book title" value={title}
        onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="author name" value={author}
        onChange={(e) => setAuthor(e.target.value)} />
      <input type="submit" value="add book" />
    </form>
  );
}
 
export default NewBookForm;
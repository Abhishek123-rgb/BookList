import React, { useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext';

const Navbar = () => {
    const {book} = useContext(BooksContext);
    return(
      <div className="navbar">

        <h1> Ninja Reading List</h1>
        <h2>Let's Fucked up all reactja project</h2>
        <p>Currently you have {book.length} books to get through...</p>
      </div>
    );
}

export default Navbar;
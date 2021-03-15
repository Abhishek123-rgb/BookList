import React, { createContext, useState } from 'react';
import uuid from 'uuid/dist/v1';
export const BooksContext = createContext();

const BooksContextProvider = (props) =>{
    const [book, setBook] = useState([
        {title: 'hari om', author: 'abhishek', id: 1},
        {title: 'rab ne bana jodi', author: 'kunal shankar', id: 2}
    ]);

    const addBooks = (title, author) => {
        setBook([...book, {title: title, author:author, id: uuid()}]);
    };

    const removeBooks = (id) =>{
        setBook(book.filter(book => book.id !== id));
    };
    return(
        <BooksContext.Provider value={{ book, addBooks, removeBooks }}>
            {props.children}
        </BooksContext.Provider>
    )
}

export default BooksContextProvider;


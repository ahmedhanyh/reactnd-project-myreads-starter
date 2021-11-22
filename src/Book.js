import React, { Component } from "react";
import BookShelfChanger from "./BookShelfChanger";

const Book = props => (
    <li>
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.coverURL})` }}></div>
                <BookShelfChanger />
            </div>
            <div className="book-title">{props.title}</div>
            <div className="book-authors">{props.author}</div>
        </div>
    </li>
)

export default Book;
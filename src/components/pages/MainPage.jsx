import React from 'react';
import Card from '../ui/card/Card';
import './page.css';

export default function MainPage({ comics, favorites }) {
  return (
    <div className="mainContainer">
      <div className="sideBar">
        sideBar
      </div>
      <div className="bookContent">
        {comics.map((book) => (
          <Card
            key={book.id}
            book={book}
            isFavorite={favorites.includes(book.id)}
          />
        ))}
      </div>
    </div>
  );
}

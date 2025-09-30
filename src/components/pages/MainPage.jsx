import React, { useState } from 'react';
import Card from '../ui/card/Card';
import Sidebar from '../ui/sidebar/Sidebar';
import './page.css';

export default function MainPage({
  comics, favorites, arrayItemCart, styles,
}) {
  const [books, setBooks] = useState(comics);

  return (
    <div className="mainContainer">
      <Sidebar setBooks={setBooks} comics={comics} styles={styles} />
      <div className="bookContent">
        {books?.map((book) => (
          <Card
            key={book.id}
            book={book}
            isFavorite={favorites.includes(book.id)}
            inCart={arrayItemCart.includes(book.id)}
          />
        ))}
      </div>
    </div>
  );
}

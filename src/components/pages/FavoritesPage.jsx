import React, { useState } from 'react';
import Card from '../ui/card/Card';
import './page.css';

export default function FavoritesPage({ favoritesComics }) {
  const [favorites, setFavoritesList] = useState(favoritesComics);

  const trueValue = true;

  return (
    <div className="mainContainer">
      <div className="favoriteContainer">
        {favorites.length > 0
          ? favorites.map((book) => (
            <Card
              key={book.id}
              book={book}
              isFavorite={trueValue}
              setFavoritesList={setFavoritesList}
            />
          )) : <div className="hContainer"><h2>В избранном нет комиксов</h2></div>}
      </div>
    </div>
  );
}

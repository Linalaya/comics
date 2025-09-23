import axios from 'axios';
import React, { useState } from 'react';

export default function Card({ book, isFavorite }) {
  const [favorite, setFavorite] = useState(isFavorite);

  const addHandler = async () => {
    try {
      const response = await axios.post(`/api/v1/favorites/${book.id}`);
      if (response.status === 200) setFavorite(true);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const removeHandler = async () => {
    try {
      const response = await axios.delete(`/api/v1/favorites/${book.id}`);
      if (response.status === 200) setFavorite(false);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="card" style={{ width: '12rem' }}>
      <img src={book.imgUrl} className="card-img-top" width={100} height={250} alt={book.title} />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.description}</p>
      </div>
      <div className="card-body">
        {favorite ? (
          <button onClick={removeHandler} type="button">
            <img
              src="/icons/favorite.png"
              alt="favorite"
              width={20}
              height={20}
            />
          </button>
        ) : (
          <button onClick={addHandler} type="button">
            <img
              src="/icons/emptyFavorite.png"
              alt="favorite"
              width={20}
              height={20}
            />
          </button>
        )}

        <br />
        <a href="#" className="link-secondary text-decoration-none">в корзину</a>
      </div>
    </div>
  );
}

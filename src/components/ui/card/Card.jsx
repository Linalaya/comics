import axios from 'axios';
import React, { useState } from 'react';

export default function Card({
  book, isFavorite, setFavoritesList, inCart,
}) {
  const [favorite, setFavorite] = useState(isFavorite);
  const [isInCart, setIsInCart] = useState(inCart);

  const addFavoriteHandler = async () => {
    try {
      const response = await axios.post(`/api/v1/favorites/${book.id}`);
      if (response.status === 200) setFavorite(true);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const removeFavoriteHandler = async () => {
    try {
      const response = await axios.delete(`/api/v1/favorites/${book.id}`);
      if (response.status === 200) {
        setFavorite(false);
        if (setFavoritesList) setFavoritesList((prev) => prev.filter((el) => el.id !== book.id));
      }
    } catch (error) {
      console.log(error);

      alert(error.response.data.message);
    }
  };

  const handleInCart = async () => {
    try {
      const response = await axios.post(`/api/v1/cart/${book.id}`);
      if (response.status === 200) {
        setIsInCart(true);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const removeFromCart = async () => {
    try {
      const response = await axios.delete(`/api/v1/cart/${book.id}`);
      if (response.status === 200) {
        setIsInCart(false);
      }
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
          <button onClick={removeFavoriteHandler} type="button">
            <img
              src="/icons/favorite.png"
              alt="favorite"
              width={20}
              height={20}
            />
          </button>
        ) : (
          <button onClick={addFavoriteHandler} type="button">
            <img
              src="/icons/emptyFavorite.png"
              alt="favorite"
              width={20}
              height={20}
            />
          </button>
        )}
        {isInCart ? (
          <button onClick={removeFromCart} type="button">
            <img
              src="/icons/deleteCart.png"
              alt="cart"
              width={20}
              height={20}
            />
          </button>
        ) : (
          <button onClick={handleInCart} type="button">
            <img
              src="/icons/cart.png"
              alt="cart"
              width={20}
              height={20}
            />
          </button>
        )}
      </div>
    </div>
  );
}

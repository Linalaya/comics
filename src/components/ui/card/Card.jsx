import React from 'react';

export default function Card({ book }) {
  return (
    <div className="card" style={{ width: '12rem' }}>
      <img src={book.imgUrl} className="card-img-top" width={100} height={250} alt={book.title} />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.description}</p>
      </div>
      <div className="card-body">
        <a href="#" className="card-link">в избранное</a>
        <a href="#" className="card-link">в корзину</a>
      </div>
    </div>
  );
}

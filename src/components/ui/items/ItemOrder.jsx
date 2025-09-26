import React, { useState } from 'react';
import './item.css';

export default function ItemOrder({ item }) {
  const [order] = useState((item.Books.filter((el, index) => index < 4)));
  return (
    <div className="itemOrderContainer">
      <div className="card border-light mb-1 mt-1" style={{ width: '25rem' }}>
        <div className="card-header">{item.status}</div>
        <div className="card-body">
          <h5 className="card-title">{`Заказ № ${item.id}`}</h5>
          <p className="card-text">
            {`Дата оформления: ${new Date(item.createdAt).toLocaleString('ru-RU', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}`}
          </p>
        </div>
      </div>
      <div className="imgContainer">
        {order.map((book) => (
          <img
            width={70}
            height={100}
            src={book.imgUrl}
            alt={book.title}
            key={book.id}
          />
        ))}
      </div>
    </div>
  );
}

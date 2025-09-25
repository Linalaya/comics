import React, { useState } from 'react';
import './item.css';
import axios from 'axios';

export default function ItemCart({ item }) {
  const [quantity, setQuantity] = useState((item.CartBooks.quantity));

  const changeQuantity = async (e) => {
    const newQuantity = e.target.value;
    if (Number(newQuantity) > 0) {
      setQuantity(e.target.value);
      const data = { quantity: e.target.value, bookId: item.id };
      const response = await axios.patch('/api/v1/cart', data);
      if (response.status === 200) console.log('кол-во обновлено');
    }
  };

  return (
    <div className="itemCartContainer">
      <img width={60} height={60} src={item.imgUrl} alt={item.title} />
      <h5 className="card-title">{item.title}</h5>
      <input value={quantity} onChange={changeQuantity} />
      <h5 className="card-title">
        {item.price * quantity}
        {' '}
        ₽
        {' '}
      </h5>
    </div>
  );
}

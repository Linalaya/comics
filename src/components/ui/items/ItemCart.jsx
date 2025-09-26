import React, { useState } from 'react';
import './item.css';
import axios from 'axios';

export default function ItemCart({ item, setListCart }) {
  const [quantity, setQuantity] = useState((item.CartBooks.quantity));

  const changeQuantityHandler = async (e) => {
    const newQuantity = e.target.value;
    if (Number(newQuantity) > 0 && Number(newQuantity) < 100) {
      setQuantity(e.target.value);
      const data = { quantity: e.target.value, bookId: item.id };
      await axios.patch('/api/v1/cart', data);
    }
  };

  const deleteHandler = async () => {
    const response = await axios.delete(`/api/v1/cart/${item.id}`);
    if (response.status === 200) {
      if (setListCart) {
        setListCart(
          (prev) => ({ ...prev, Books: prev.Books.filter((el) => el.id !== item.id) }),
        );
      }
    }
  };

  return (
    <div className="itemCartContainer">
      <img width={50} height={65} src={item.imgUrl} alt={item.title} />
      <h5 className="card-title">{item.title}</h5>
      <input value={quantity} onChange={changeQuantityHandler} />
      <h5 className="card-title">
        {item.price * quantity}
        {' '}
        ₽
        {' '}
      </h5>
      <button type="button" className="btn btn-danger" onClick={deleteHandler}>Удалить</button>
    </div>
  );
}

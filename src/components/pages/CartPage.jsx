import React from 'react';
import ItemCart from '../ui/items/ItemCart';
import './page.css';
import axios from 'axios';

export default function CartPage({ cart }) {
  const orderHandler = async () => {
    try {
      const response = await axios.post('/api/v1/orders');
      if (response.status === 201) {
        alert(`Заказ №${response.data.orderId} успешно оформлен!`);
        window.location.href = '/orders';
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="cartContainer">
      {cart.Books.length > 0 ? (
        <>
          {cart.Books.map((book) => (
            <ItemCart item={book} key={book.id} />
          ))}
          <button
            type="button"
            className="btn btn-success mt-3"
            onClick={orderHandler}
          >
            Оформить заказ
          </button>
        </>
      ) : (
        <h2>В корзине пусто</h2>
      )}
    </div>
  );
}

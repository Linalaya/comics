import React from 'react';
import ItemOrder from '../ui/items/ItemOrder';
import './page.css';

export default function OrdersPage({ orders }) {
  return (
    <div className="cartContainer">
      {orders.length > 0 ? (
        <>
          {orders.map((order) => (
            <ItemOrder item={order} key={order.id} />
          ))}
        </>
      ) : (
        <h2>Нет заказов</h2>
      )}
    </div>
  );
}

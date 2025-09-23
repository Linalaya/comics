import React from 'react';
import './navbar.css';
import axios from 'axios';

export default function Navbar({ user }) {
  const navigationHandler = (path) => () => {
    window.location.href = path;
  };

  const logoutHandler = async () => {
    try {
      const response = await axios.get('/api/v1/auth/logout');
      if (response.status === 200) window.location.href = '/auth/login';
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <nav className="navContainer">
      <div className="linkContainer">
        <p className="text-center">
          {user && `Привет, ${user.username}!`}
        </p>
        <button className="btn btn-sm btn-outline-secondary" type="button" onClick={navigationHandler('/')}>Главная</button>
        {!user ? (
          <>
            <button className="btn btn-sm btn-outline-secondary" type="button" onClick={navigationHandler('/auth/register')}>Зарегистрироваться</button>
            <button className="btn btn-sm btn-outline-secondary" type="button" onClick={navigationHandler('/auth/login')}>Войти</button>
          </>
        )
          : (
            <>
              <button className="btn btn-sm btn-outline-secondary" type="button" onClick={navigationHandler('/user/favorites')}>Избранное</button>
              <button className="btn btn-sm btn-outline-secondary" type="button" onClick={navigationHandler('/user/list')}>Корзина</button>
              <button className="btn btn-sm btn-outline-secondary" type="button" onClick={navigationHandler('/user/orders')}>Заказы</button>
              <button className="btn btn-sm btn-outline-secondary" type="button" onClick={logoutHandler}>Выйти</button>
            </>
          )}
      </div>
    </nav>
  );
}

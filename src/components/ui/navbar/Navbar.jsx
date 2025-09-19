import React from 'react';
import './navbar.css';

export default function Navbar() {
  const navigationHandler = (path) => () => {
    window.location.href = path;
  };

  return (
    <nav className="navContainer">
      <div className="linkContainer">
        <button className="btn btn-sm btn-outline-secondary" type="button" onClick={navigationHandler('/')}>Главная</button>
        <button className="btn btn-sm btn-outline-secondary" type="button" onClick={navigationHandler('/auth/register')}>Зарегистрироваться</button>
        <button className="btn btn-sm btn-outline-secondary" type="button" onClick={navigationHandler('/auth/login')}>Войти</button>
      </div>
    </nav>
  );
}

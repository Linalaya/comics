import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="mainContainer">
      <div className="linkContainer">
        <button className="btn btn-sm btn-outline-secondary" type="button">Главная</button>
        <button className="btn btn-sm btn-outline-secondary" type="button">Не главная</button>
        <button className="btn btn-sm btn-outline-secondary" type="button">Еще раздел</button>
      </div>
    </nav>
  );
}

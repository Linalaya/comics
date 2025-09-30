import React from 'react';
import axios from 'axios';

export default function RegisterPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/auth/register', Object.fromEntries(new FormData(e.target)));
      if (response.status === 200) window.location.href = '/';
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label" htmlFor="username">
            Имя пользователя
            <input name="username" type="text" className="form-control" id="username" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Адрес электронной почты
            <input name="email" type="email" className="form-control" id="email" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Пароль
            <input name="password" type="password" className="form-control" id="password" />
          </label>
        </div>
        <button type="submit" className="btn btn-success">Зарегистрироваться</button>
      </form>
    </div>
  );
}

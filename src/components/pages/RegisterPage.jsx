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
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label">
          Имя пользователя
          <input name="username" type="text" className="form-control" />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label">
          Адрес электронной почты
          <input name="email" type="email" className="form-control" />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label">
          Пароль
          <input name="password" type="password" className="form-control" />
        </label>
      </div>
      <button type="submit" className="btn btn-success">Зарегистрироваться</button>
    </form>
  );
}

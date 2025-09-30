import React from 'react';
import axios from 'axios';

export default function LoginPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/auth/login', Object.fromEntries(new FormData(e.target)));
      if (response.status === 200) window.location.href = '/';
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label" htmlFor="username-login">
            Адрес электронной почты
            <input name="email" type="email" className="form-control" id="username-login" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password-login">
            Пароль
            <input name="password" type="password" className="form-control" id="password-login" />
          </label>
        </div>
        <button type="submit" className="btn btn-success">Войти</button>
      </form>
    </div>
  );
}

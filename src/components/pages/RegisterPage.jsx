import React from 'react';

export default function RegisterPage() {
  return (
    <form>
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
      <button type="submit" className="btn btn-success">Отправить</button>
    </form>
  );
}

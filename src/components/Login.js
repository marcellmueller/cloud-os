import { useState } from 'react';
import './Login.scss';
import axios from 'axios';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const login = (event) => {
    event.preventDefault();
    const data = { email: email, password: password };
    const URL = `/login/`;
    const promise = axios.post(URL, data).then((response) => {
      if (response.data) {
        console.log('YAY');
      } else {
        console.log('NAY');
      }
    });
    return promise;
  };
  return (
    <section className="login">
      <form className="login-form" method="POST" action="/login">
        <h2 id="login-title">Login</h2>
        <label for="login-email">Email:</label>
        <input
          onChange={emailOnChange}
          type="email"
          id="login-email"
          required
          name="email"
        />
        <label for="login-email">Password:</label>
        <input
          onChange={passwordOnChange}
          type="password"
          id="login-password"
          required
          name="email"
        />
        <button onClick={login} type="submit" id="login-button">
          Login
        </button>
      </form>
    </section>
  );
}

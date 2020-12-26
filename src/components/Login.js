import { useState } from 'react';
import { Redirect } from 'react-router';
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

  const user = (data) => {
    props.setUser(data);
  };

  const login = (event) => {
    event.preventDefault();
    const data = { email: email, password: password };
    const URL = `/login/`;
    const promise = axios.post(URL, data).then((response) => {
      if (response.data) {
        user(response.data);
        props.history.push('/');
      } else {
        user(false);
      }
    });
    return promise;
  };

  return (
    <section className="login">
      <form className="login-form" method="POST" action="/login">
        <h2 id="login-title">Login</h2>
        <h3>Email:</h3>
        <input
          onChange={emailOnChange}
          type="email"
          id="login-email"
          required
          name="email"
        />
        <h3>Password:</h3>
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

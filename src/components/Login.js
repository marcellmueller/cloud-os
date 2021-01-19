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

  const user = (data) => {
    props.setUser(data);
  };

  const login = (event) => {
    event.preventDefault();
    const data = { email: email, password: password };
    const URL = `/login/`;
    const promise = axios
      .post(URL, data)
      .then((response) => {
        if (response.data) {
          user(response.data);
          props.setMessage('Login verified');
          props.history.push('/');
        } else {
          user('');
        }
      })
      .catch(function (error) {
        props.setError('Incorrect login information');
      });

    return promise;
  };

  const guest = () => {
    props.setUser({
      firstName: 'Guest',
      lastName: '',
      email: 'Guest',
      password: 'password',
      password2: 'password2',
    });
    props.history.push('/');
  };

  return (
    <div className="login-body">
      <section className="login">
        <form className="login-form" method="POST" action="/login">
          <h3>Email:</h3>
          <input
            onChange={emailOnChange}
            type="email"
            className="login-email"
            required
            name="email"
          />
          <h3>Password:</h3>
          <input
            onChange={passwordOnChange}
            type="password"
            className="login-password"
            required
            name="email"
          />
          <button onClick={login} type="submit" className="login-button">
            Login
          </button>
        </form>
        <h3 className="guest-title">Sign in as guest</h3>
        <button onClick={guest} id="guest-btn" className="login-button">
          Guest
        </button>
        {props.error ? <div id="error">{props.error}</div> : null}
      </section>
    </div>
  );
}

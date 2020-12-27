import { useState, useEffect } from 'react';
import axios from 'axios';
import './Create.scss';

export default function Create(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    passwordError(password, password2);
  }, [password, password2]);

  const passwordError = (password, password2) => {
    if (password !== password2) {
      setError('Password Mismatch');
    } else if (password === password2) {
      setError('');
    }
  };

  const firstNameOnChange = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameOnChange = (event) => {
    setLastName(event.target.value);
  };

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordOnChange = (event) => {
    setPassword(event.target.value);
  };

  const password2OnChange = (event) => {
    setPassword2(event.target.value);
  };

  const create = (event) => {
    event.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      password2: password2,
    };
    const URL = `/create/`;
    const promise = axios
      .post(URL, data)
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          props.history.push('/');
        } else {
          console.log('no response data');
        }
      })
      .catch(console.log('err'));
    return promise;
  };

  return (
    <section className="login">
      <form className="login-form" method="POST" action="/login">
        <h2 id="login-title">Create User</h2>
        <h3>First Name:</h3>
        <input
          type="text"
          className="login-name"
          required
          name="lastName"
          onChange={firstNameOnChange}
        />
        <h3>Last Name:</h3>
        <input
          type="text"
          className="login-name"
          required
          name="firstName"
          onChange={lastNameOnChange}
        />
        <h3>Email:</h3>
        <input
          type="email"
          id="login-email"
          required
          name="email"
          onChange={emailOnChange}
        />
        <h3>Password:</h3>
        <input
          type="password"
          minLength="6"
          id="login-password"
          required
          name="password"
          onChange={passwordOnChange}
        />
        <h3>Re-enter Password:</h3>
        <input
          type="password"
          minLength="6"
          id="login-password"
          required
          name="password2"
          onChange={password2OnChange}
        />
        <button onClick={create} type="submit" id="login-button">
          Login
        </button>
      </form>
      {error ? <div>{error}</div> : null}
    </section>
  );
}

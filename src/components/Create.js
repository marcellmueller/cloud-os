import { useState, useEffect } from 'react';
import axios from 'axios';
import './Create.scss';

export default function Create(props) {
  const [account, setAccount] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
  });

  useEffect(() => {
    const passwordError = (password, password2) => {
      if (password !== password2) {
        props.setError('Password mismatch');
      } else if (password === password2) {
        props.setError('');
      }
    };
    passwordError(account.password, account.password2);
  }, [account, props]);

  const firstNameOnChange = (event) => {
    setAccount({
      ...account,
      firstName: event.target.value,
    });
  };

  const lastNameOnChange = (event) => {
    setAccount({
      ...account,
      lastName: event.target.value,
    });
  };

  const emailOnChange = (event) => {
    setAccount({
      ...account,
      email: event.target.value,
    });
  };

  const passwordOnChange = (event) => {
    setAccount({
      ...account,
      password: event.target.value,
    });
  };

  const password2OnChange = (event) => {
    setAccount({
      ...account,
      password2: event.target.value,
    });
  };

  const create = (event) => {
    event.preventDefault();

    const data = {
      firstName: account.firstName,
      lastName: account.lastName,
      email: account.email,
      password: account.password,
      password2: account.password2,
    };
    const URL = `/create/`;
    const promise = axios
      .post(URL, data)
      .then((response) => {
        console.log(response.data);
        if (response.data === 'exists') {
          props.setError('Email already used');
        }

        if (response.data === 'mismatch') {
          props.setError('Password mismatch');
        }
        if (response.data.email) {
          props.setMessage('Account created');
          props.history.push('/');
        }
      })
      .then({})
      .catch();
    axios
      .get('/logout')
      .then((response) => {
        props.setUser(false);
      })
      .catch('error');
    return promise;
  };

  return (
    <section className="create-form">
      <form className="login-form" method="POST" action="/login">
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
          className="create-email"
          required
          name="email"
          onChange={emailOnChange}
        />
        <h3>Password:</h3>
        <input
          type="password"
          minLength="6"
          className="create-password"
          required
          name="password"
          onChange={passwordOnChange}
        />
        <h3>Re-enter Password:</h3>
        <input
          type="password"
          minLength="6"
          className="create-password"
          required
          name="password2"
          onChange={password2OnChange}
        />
        <button
          onClick={create}
          type="submit"
          id="create-button"
          className="login-button"
        >
          Create
        </button>
      </form>
      {props.error ? <div id="error">{props.error}</div> : null}
    </section>
  );
}

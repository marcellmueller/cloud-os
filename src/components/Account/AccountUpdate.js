import { useEffect } from 'react';
import axios from 'axios';
import './AccountUpdate.scss';

export default function AccountUpdate(props) {
  useEffect(() => {
    const passwordError = (password, password2) => {
      if (password !== password2) {
        props.setError('Password mismatch');
      } else if (password === password2) {
        props.setError('');
      }
    };
    passwordError(props.password, props.password2);
  }, [props.account, props]);

  const firstNameOnChange = (event) => {
    props.setAccount({
      ...props.account,
      firstName: event.target.value,
    });
  };

  const lastNameOnChange = (event) => {
    props.setAccount({
      ...props.account,
      lastName: event.target.value,
    });
  };

  const emailOnChange = (event) => {
    props.setAccount({
      ...props.account,
      email: event.target.value,
    });
  };

  const passwordOnChange = (event) => {
    props.setAccount({
      ...props.account,
      password: event.target.value,
    });
  };

  const password2OnChange = (event) => {
    props.setAccount({
      ...props.account,
      password2: event.target.value,
    });
  };

  const update = (event) => {
    event.preventDefault();

    const firstName = props.account.firstName
      ? props.account.firstName
      : props.user.firstname;
    const lastName = props.account.lastName
      ? props.account.lastName
      : props.user.lastname;
    const email = props.account.email ? props.account.email : props.user.email;
    const password = props.account.password
      ? props.account.password
      : props.user.password;
    const password2 = props.account.password2;
    const data = {
      id: props.user.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      password2: props.password2,
    };

    if (password !== password2 || password === '' || password2 === '') {
      props.setError('Password mismatch');
      return;
    }
    console.log(data);
    const URL = `/update`;
    const promise = axios
      .post(URL, data)
      .then((response) => {
        console.log(response);
        props.setUser((prevState) => {
          return {
            ...prevState,
            firstname: props.account.firstName,
            lastname: props.account.lastName,
            email: props.account.email,
            password: props.account.password,
          };
        });
      })
      .catch(console.log('error'));
    return promise;
  };

  return (
    <section className="update-account">
      <form className="update-form" method="POST" action="/login">
        <h2 id="login-title">Update Account</h2>
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
          className="login-email"
          required
          name="email"
          onChange={emailOnChange}
        />
        <h3>Password:</h3>
        <input
          type="password"
          minLength="6"
          className="login-password"
          required
          name="password"
          onChange={passwordOnChange}
        />
        <h3>Re-enter Password:</h3>
        <input
          type="password"
          minLength="6"
          className="login-password"
          required
          name="password2"
          onChange={password2OnChange}
        />
        <button onClick={update} type="submit" className="login-button">
          Update
        </button>
      </form>
      {props.error ? <div id="error">{props.error}</div> : null}
    </section>
  );
}

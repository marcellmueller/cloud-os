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
  }, [props.password, props.password2, props]);

  const firstNameOnChange = (event) => {
    props.setFirstName(event.target.value);
  };

  const lastNameOnChange = (event) => {
    props.setLastName(event.target.value);
  };

  const emailOnChange = (event) => {
    props.setEmail(event.target.value);
  };

  const passwordOnChange = (event) => {
    props.setPassword(event.target.value);
  };

  const password2OnChange = (event) => {
    props.setPassword2(event.target.value);
  };

  const update = (event) => {
    event.preventDefault();

    const firstName = props.firstName ? props.firstName : props.user.firstname;
    const lastName = props.lastName ? props.lastName : props.user.lastname;
    const email = props.email ? props.email : props.user.email;
    const password = props.password ? props.password : props.user.password;
    const password2 = props.password2;
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
        props.setUser((prevState) => {
          return {
            ...prevState,
            firstname: props.firstName,
            lastname: props.lastName,
            email: props.email,
            password: props.password,
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

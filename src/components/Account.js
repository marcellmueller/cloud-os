import { useState, useEffect } from 'react';
import './Account.scss';
import AccountUpdate from './AccountUpdate';
import AccountView from './AccountView';

export default function Account(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  useEffect(() => {
    const passwordError = (password, password2) => {
      if (password !== password2) {
        props.setError('Password mismatch');
      } else if (password === password2) {
        props.setError('');
      }
    };
    passwordError(password, password2);
  }, [password, password2, props]);

  return (
    <section className="account">
      <AccountUpdate
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        password2={password2}
        user={props.user}
        setUser={props.setUser}
        error={props.error}
        setError={props.setError}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setPassword={setPassword}
        setPassword2={setPassword2}
      ></AccountUpdate>
      <AccountView
        firstName={firstName}
        lastName={lastName}
        email={email}
        password={password}
        password2={password2}
        user={props.user}
      ></AccountView>
    </section>
  );
}

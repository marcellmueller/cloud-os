import { useState, useEffect } from 'react';
import './Account.scss';
import AccountUpdate from './AccountUpdate';
import AccountView from './AccountView';

export default function Account(props) {
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

  return (
    <section className="account">
      <AccountUpdate
        user={props.user}
        setUser={props.setUser}
        error={props.error}
        setError={props.setError}
      ></AccountUpdate>
      <AccountView
        account={account}
        setAccount={setAccount}
        user={props.user}
      ></AccountView>
    </section>
  );
}

// import { useEffect } from 'react';
import './Account.scss';
import AccountUpdate from './AccountUpdate';
import AccountView from './AccountView';

export default function Account(props) {
  return (
    <section className="account">
      <AccountUpdate></AccountUpdate>
      <AccountView></AccountView>
    </section>
  );
}

// import { useEffect } from 'react';
import './User.scss';
import axios from 'axios';
export default function User(props) {
  // useEffect(() => {}, [props.user]);
  const loginClick = () => {
    props.history.push('/login');
  };

  const logoutClick = () => {
    axios.get('/logout').then((response) => {
      props.setUser(false);
      props.history.push('/login');
    });
  };
  return (
    <section className="user">
      {props.user && <h3>{props.user.name}</h3>}
      {props.user && <button onClick={logoutClick}>Logout</button>}
      {!props.user && <button onClick={loginClick}>Login</button>}
    </section>
  );
}

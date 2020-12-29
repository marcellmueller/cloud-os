import { useHistory } from 'react-router-dom';
import './UserNav.scss';
import axios from 'axios';
export default function UserNav(props) {
  const history = useHistory();
  const name = props.user.firstname;

  const loginClick = () => {
    history.push('/login');
  };

  const logoutClick = (event) => {
    event.preventDefault();
    props.setUser('');
    const URL = `/logout/`;

    const promise = axios
      .get(URL)
      .then((response) => {
        props.setUser('');
        console.log('hello');
      })
      .catch(function (error) {
        props.setError('500 Error');
      });
    history.push('/login');

    return promise;
  };

  return (
    <section className="user">
      {props.user && <h3 className="user-h3">{name}</h3>}
      {props.user && (
        <button className="login-button" id="user-logout" onClick={logoutClick}>
          Logout
        </button>
      )}
      {!props.user && (
        <button className="login-button" id="user-login" onClick={loginClick}>
          Login
        </button>
      )}
    </section>
  );
}

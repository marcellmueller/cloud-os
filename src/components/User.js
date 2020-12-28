import { useHistory } from 'react-router-dom';
import './User.scss';
import axios from 'axios';
export default function User(props) {
  const history = useHistory();
  const name = props.user.firstname;

  const loginClick = () => {
    history.push('/login');
  };

  const logoutClick = () => {
    history.push('/login');

    props.setUser(false);
    axios.get('/logout').catch(function (error) {
      props.setError('500 Error');
    });
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

import './Menu.scss';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import MenuItem from './MenuItem';

export default function UserList(props) {
  const history = useHistory();

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

  const menuItems = [
    {
      id: 1,
      name: 'Settings',
      last_used: Date.now(),
    },
    {
      id: 2,
      name: 'Paint',
      last_used: Date.now(),
    },
    {
      id: 3,
      name: 'Word',
      last_used: Date.now(),
    },
    {
      id: 4,
      name: 'Tic Tac Toe',
      last_used: Date.now(),
    },
  ];

  const mapUser = menuItems.map((item) => {
    return <MenuItem key={item.id} id={item.id} name={item.name} />;
  });
  return (
    <div className="menu">
      {mapUser}
      <button className="logout-button" id="user-logout" onClick={logoutClick}>
        <img
          alt="logo"
          className="logout-icon"
          src="/img/icons/logoutdark.png"
        />
      </button>
    </div>
  );
}

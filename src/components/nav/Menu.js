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
        console.log('error');
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
      name: 'Code',
      last_used: Date.now(),
    },
    {
      id: 4,
      name: 'Tic Tac Toe',
      last_used: Date.now(),
    },
    {
      id: 5,
      name: 'Terminal',
      last_used: Date.now(),
    },
    {
      id: 6,
      name: 'Tunes',
      last_used: Date.now(),
    },
    {
      id: 7,
      name: 'Calculator',
      last_used: Date.now(),
    },
  ];

  const mapItems = menuItems.map((item) => {
    return (
      <MenuItem
        key={item.id}
        id={item.id}
        name={item.name}
        state={props.state}
        setState={props.setState}
      />
    );
  });
  return (
    <div className="menu">
      {mapItems}
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

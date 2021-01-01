import { NavLink } from 'react-router-dom';
import UserNav from './UserNav';
import './NavMenu.scss';

export default function NavMenu(props) {
  return (
    <nav id="nav-menu">
      {props.user ? (
        <NavLink className="nav-menu-item" id="nav-menu-home" exact to="/">
          Home
        </NavLink>
      ) : null}
      {props.user ? (
        <NavLink className="nav-menu-item" id="nav-menu-home" exact to="/posts">
          Posts
        </NavLink>
      ) : null}
      {props.user ? (
        <NavLink className="nav-menu-item" id="nav-menu-home" exact to="/users">
          Users
        </NavLink>
      ) : null}
      {props.user ? (
        <NavLink
          className="nav-menu-item"
          id="nav-menu-account"
          exact
          to="/account"
        >
          Account
        </NavLink>
      ) : null}
      {!props.user ? (
        <NavLink className="nav-menu-item" id="nav-menu-login" to="/login">
          Login
        </NavLink>
      ) : null}
      {!props.user ? (
        <NavLink className="nav-menu-item" id="nav-menu-create" to="/create">
          Create
        </NavLink>
      ) : null}
      <UserNav
        user={props.user}
        setUser={props.setUser}
        setError={props.setError}
      ></UserNav>
    </nav>
  );
}

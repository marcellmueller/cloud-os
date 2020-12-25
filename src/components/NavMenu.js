import { NavLink } from 'react-router-dom';
import './NavMenu.scss';

export default function NavMenu() {
  return (
    <nav id="nav-menu">
      <NavLink className="nav-menu-item" id="nav-menu-home" exact to="/">
        Home
      </NavLink>
      <NavLink className="nav-menu-item" id="nav-menu-login" to="/login">
        Login
      </NavLink>
      <NavLink className="nav-menu-item" id="nav-menu-create" to="/create">
        Create
      </NavLink>
    </nav>
  );
}

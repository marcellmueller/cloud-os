import { NavLink } from 'react-router-dom';
import './NavMenu.scss';

export default function NavMenu() {
  return (
    <nav className="nav-menu">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/create">Create</NavLink>
      </li>
    </nav>
  );
}

import './Nav.scss';
import NavMenu from './NavMenu';
export default function Nav(props) {
  return (
    <nav className="nav">
      <NavMenu
        user={props.user}
        setUser={props.setUser}
        setError={props.setError}
      ></NavMenu>
    </nav>
  );
}

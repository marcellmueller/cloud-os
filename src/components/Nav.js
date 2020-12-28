import './Nav.scss';
import User from './User';
import NavMenu from './NavMenu';
export default function Nav(props) {
  return (
    <nav className="nav">
      <User
        user={props.user}
        setUser={props.setUser}
        setError={props.setError}
      ></User>
      <NavMenu user={props.user}></NavMenu>
    </nav>
  );
}

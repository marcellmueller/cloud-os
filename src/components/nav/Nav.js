import './Nav.scss';
import UserNav from './UserNav';
import NavMenu from './NavMenu';
export default function Nav(props) {
  return (
    <nav className="nav">
      <NavMenu user={props.user}></NavMenu>
      <UserNav
        user={props.user}
        setUser={props.setUser}
        setError={props.setError}
      ></UserNav>
    </nav>
  );
}

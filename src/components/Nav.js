import './Nav.scss';
import User from './User';
import NavMenu from './NavMenu';
export default function Nav(props) {
  console.log(props);
  return (
    <nav className="nav">
      <User
        history={props.history}
        user={props.user}
        setUser={props.setUser}
      ></User>
      <NavMenu></NavMenu>
    </nav>
  );
}

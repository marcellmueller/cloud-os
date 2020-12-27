import './Nav.scss';
import User from './User';
import NavMenu from './NavMenu';
export default function Nav(props) {
  console.log(props);
  return (
    <nav className="nav">
      <User user={props.user} setUser={props.setUser}></User>
      <NavMenu user={props.user}></NavMenu>
    </nav>
  );
}

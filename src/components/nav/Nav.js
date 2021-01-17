import './Nav.scss';
import Clock from './Clock';
import NavMenu from './NavMenu';
import Menu from './Menu';

export default function Nav(props) {
  return (
    <nav className="nav">
      <NavMenu
        user={props.user}
        setUser={props.setUser}
        state={props.state}
        setState={props.setState}
      ></NavMenu>
      {props.state.showMenu ? <Menu></Menu> : null}
      <div>
        {' '}
        <Clock />
      </div>
    </nav>
  );
}

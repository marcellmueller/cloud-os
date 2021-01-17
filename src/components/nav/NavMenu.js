import './NavMenu.scss';
export default function NavMenu(props) {
  const toggle = () => {
    props.state.showMenu
      ? props.setState({ showMenu: false })
      : props.setState({ showMenu: true });
  };
  return (
    <nav id="nav-menu">
      <button className="menu-button" onClick={toggle}>
        <img alt="logo" className="os-logo" src="/img/icons/logo.png" />
        Menu
      </button>
    </nav>
  );
}

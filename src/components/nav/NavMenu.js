import './NavMenu.scss';
export default function NavMenu(props) {
  const toggle = () => {
    props.state.showMenu
      ? props.setState({
          ...props.state,
          showMenu: false,
          showCalendar: false,
        })
      : props.setState({
          ...props.state,
          showMenu: true,
          showCalendar: false,
        });
  };
  return (
    <nav id="nav-menu">
      <button className="menu-button" onClick={toggle}>
        <img alt="logo" className="os-logo" src="/img/icons/linux.png" />
        Menu
      </button>
    </nav>
  );
}

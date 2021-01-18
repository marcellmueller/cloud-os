import './MenuItem.scss';

export default function MenuItem(props) {
  const toggle = () => {
    const keyName = 'show' + props.name;
    props.setState({
      ...props.state,
      showMenu: false,
      showCalendar: false,
      [keyName]: true,
    });
  };
  return (
    <section onClick={toggle} className="menu-item">
      <div className="menu-item-name">{props.name}</div>
    </section>
  );
}

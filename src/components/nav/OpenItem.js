import './OpenItem.scss';

export default function OpenItem(props) {
  const toggle = () => {
    const keyName = 'show' + props.name;
    if (props.state[keyName]) {
      props.setState({
        ...props.state,
        showMenu: false,
        showCalendar: false,
        [keyName]: false,
      });
    }
    if (!props.state[keyName]) {
      props.setState({
        ...props.state,
        showMenu: false,
        showCalendar: false,
        [keyName]: true,
      });
    }
  };
  return (
    <section onClick={toggle} className="open-item">
      <div className="open-item-name">{props.name}</div>
    </section>
  );
}

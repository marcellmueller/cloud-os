import './MenuItem.scss';

export default function MenuItem(props) {
  const toggle = () => {
    const openApps = props.state.openApps;
    const keyName = 'show' + props.name;

    const index = openApps.indexOf(props.name);
    if (index < 0) {
      openApps.push(props.name);
      props.setState({
        ...props.state,
        showMenu: false,
        showCalendar: false,
        [keyName]: true,
        openApps: [openApps],
      });
    }
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

// const close = () => {
//   const keyName = 'show' + props.name;
//   const openApps = props.state.openApps;
//   let showCalc = props.state.showCalculator;
//   showCalc = false;
//   const index = openApps.indexOf(props.name);
//   if (index > -1) {
//     openApps.splice(index, 1);
//   }
//   props.setState({
//     ...props.state,
//     showCalendar: false,
//     // [keyName]: false,
//     showCalculator: showCalc,
//     openApps: [openApps],
//     asdasdasd: 213412031,
//   });
// };

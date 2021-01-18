import './Window.scss';
import { Rnd } from 'react-rnd';

export default function Window(props) {
  const toggle = (event) => {
    const keyName = 'show' + props.name;
    props.setState({
      ...props.state,
      showMenu: false,
      showCalendar: false,
      // [keyName]: false,
      showCalculator: false,
    });
  };

  const close = () => {
    const keyName = 'show' + props.name;
    const openApps = props.state.openApps;
    let showCalc = props.state.showCalculator;
    showCalc = false;
    const index = openApps.indexOf(props.name);
    if (index > -1) {
      openApps.splice(index, 1);
    }
    props.setState({
      ...props.state,
      showCalendar: false,
      // [keyName]: false,
      showCalculator: showCalc,
      openApps: [openApps],
      asdasdasd: 213412031,
    });
  };

  return (
    <Rnd
      default={{
        x: 150,
        y: 205,
        width: 500,
        height: 190,
      }}
      minWidth={500}
      minHeight={420}
      bounds="window"
    >
      <nav className="window-nav" onClick={close}>
        <section className="window-nav-buttons">
          <button onClick={toggle} className="window-nav-button">
            _
          </button>
          <button className="window-nav-button">
            {' '}
            <img
              alt="logo"
              className="window-close"
              src="/img/icons/close.png"
            />
          </button>
        </section>
      </nav>
      <section className="window">{props.display}</section>
    </Rnd>
  );
}

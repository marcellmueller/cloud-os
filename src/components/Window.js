import './Window.scss';
import { Rnd } from 'react-rnd';

export default function Window(props) {
  const toggle = (event) => {
    const keyName = 'show' + props.name;
    props.setState({
      ...props.state,
      showMenu: false,
      showCalendar: false,
      [keyName]: false,
    });
  };

  const close = (event) => {
    const keyName = 'show' + props.name;
    const openApps = props.state.openApps;
    const index = openApps.indexOf(props.name);
    if (index > -1) {
      openApps.splice(index, 1);
    }

    props.setState({
      ...props.state,
      showMenu: false,
      showCalendar: false,
      [keyName]: false,
      openApps: openApps,
    });
  };

  return (
    <Rnd
      default={{
        x: props.x,
        y: props.y,
        width: props.width,
        height: props.height,
      }}
      minWidth={props.width}
      minHeight={props.height}
      bounds="window"
      onClick={(e) => e.stopPropagation()}
    >
      <nav className="window-nav">
        <section className="window-nav-buttons">
          <button onClick={toggle} className="window-nav-button">
            _
          </button>
          <button onClick={close} className="window-nav-button">
            {' '}
            <img
              alt="logo"
              className="window-close"
              src="/img/icons/close.png"
            />
          </button>
        </section>
      </nav>
      <section className="window" onClick={(e) => e.stopPropagation()}>
        {props.display}
      </section>
    </Rnd>
  );
}

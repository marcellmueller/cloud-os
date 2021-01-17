import { useState } from 'react';
import Clock from './Clock';
import NavMenu from './NavMenu';
import Menu from './Menu';
import Calendar from 'react-calendar';
import './Nav.scss';
import './Calendar.scss';
export default function Nav(props) {
  const [value, onChange] = useState(new Date());
  const toggle = () => {
    console.log('click');
    props.state.showCalendar
      ? props.setState({
          ...props.state,
          showMenu: false,
          showCalendar: false,
        })
      : props.setState({
          ...props.state,
          showMenu: false,
          showCalendar: true,
        });
  };
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
        <div onClick={toggle}>
          <Clock />
        </div>
        {props.state.showCalendar ? (
          <Calendar onChange={onChange} showWeekNumbers value={value} />
        ) : null}
      </div>
    </nav>
  );
}

import { useState } from 'react';
import Clock from './Clock';
import NavMenu from './NavMenu';
import Menu from './Menu';
import Calendar from 'react-calendar';
import './Nav.scss';
import './Calendar.scss';
import Open from './Open';
export default function Nav(props) {
  //calendar state
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
      <Open state={props.state} setState={props.setState}></Open>{' '}
      {props.state.showMenu ? (
        <Menu
          setUser={props.setUser}
          state={props.state}
          setState={props.setState}
        ></Menu>
      ) : null}
      <div>
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

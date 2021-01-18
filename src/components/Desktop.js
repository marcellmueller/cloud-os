import './Desktop.scss';
import Window from './Window';
import Calculator from './Apps/Calculator';
export default function Home(props) {
  const toggle = () => {
    props.setState({
      ...props.state,
      showMenu: false,
      showCalendar: false,
    });
  };
  return (
    <div
      className="desktop"
      onClick={toggle}
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      {props.state.showCalculator ? (
        <Calculator state={props.state} setState={props.setState}></Calculator>
      ) : null}

      {/* <Window></Window> */}
    </div>
  );
}

import './Desktop.scss';
import Calculator from './Apps/Calculator';
import Code from './Apps/Code';

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
      {props.state.showCode ? (
        <Code state={props.state} setState={props.setState}></Code>
      ) : null}
      {/* <Window></Window> */}
    </div>
  );
}

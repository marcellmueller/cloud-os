import { useState } from 'react';
import './Desktop.scss';
import Calculator from './Apps/Calculator';
import Code from './Apps/Code';
import CodePopUp from './Apps/CodePopUp';

export default function Home(props) {
  const [code, setCode] = useState({
    showPopUp: false,
    content: `let moveUp = (map) => {
    let location = findLocation(map, playerLocation);
    if (map[location[0] - 1][location[1]] !== 'x') {
      clearPlayer(playerLocation);
      location[0] -= 1;
      playerLocation = map[location[0]][location[1]];
      console.log(playerLocation);
      let player = document.getElementById(playerLocation);
      player.innerHTML =
        '<img id="playerGIF" src="img/up.png" width="50%" height="50%" />';
      changeArea(map, location);
    }
  };`,
  });

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
        <Code
          state={props.state}
          setState={props.setState}
          code={code}
          setCode={setCode}
          language={'javascript'}
        ></Code>
      ) : null}
      {code.showPopUp ? <CodePopUp></CodePopUp> : null}
    </div>
  );
}

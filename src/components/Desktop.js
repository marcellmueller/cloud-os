import { useState, useEffect } from 'react';
import './Desktop.scss';
import Calculator from './Calculator/Calculator';
import Code from './Code/Code';
import CodePopUp from './Code/CodePopUp';
import Tunes from './Tunes/Tunes';

export default function Home(props) {
  const [code, setCode] = useState({
    new: true,
    open: false,
    save: false,
    name: 'test',
    extension: 'javascript',
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

  useEffect(() => {
    console.log(code);
  }, [code]);

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
      {props.state.showCodePopUp ? (
        <CodePopUp
          state={props.state}
          setState={props.setState}
          code={code}
          user={props.user}
          setCode={setCode}
        ></CodePopUp>
      ) : null}
      {props.state.showTunes ? (
        <Tunes
          state={props.state}
          setState={props.setState}
          user={props.user}
        ></Tunes>
      ) : null}
    </div>
  );
}

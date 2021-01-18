import { useState } from 'react';
import './Desktop.scss';
import Calculator from './Apps/Calculator';
import Code from './Apps/Code';

export default function Home(props) {
  const [code, setCode] = useState(`let moveUp = (map) => {
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
  };
  
  let changeArea = (map, location) => {
    if (map[location[0]][location[1]][1] === 'a') {
      map = eval(map[location[0]][[location[1]]]);
      tileMap = eval(map[location[0]][[location[1]]] + 'Tiles');
      grid.innerHTML = '';
      displayMap(map, tileMap);
    }
  };
  
  let moveDown = (map) => {
    let location = findLocation(map, playerLocation);
    if (map[location[0] + 1][location[1]] !== 'x') {
      clearPlayer(playerLocation);
      location[0] += 1;
      playerLocation = map[location[0]][location[1]];
      let player = document.getElementById(playerLocation);
      player.innerHTML =
        '<img id="playerGIF" src="img/down.png" width="50%" height="50%" />';
    } else console.log("You can't move here");
  };`);

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
      {/* <Window></Window> */}
    </div>
  );
}

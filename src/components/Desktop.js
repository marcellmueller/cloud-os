import { useState, useEffect } from 'react';
import './Desktop.scss';
import Calculator from './Calculator/Calculator';
import Code from './Code/Code';
import CodePopUp from './Code/CodePopUp';
import Tunes from './Tunes/Tunes';
import Terminal from './Terminal/Terminal';
import Settings from './Settings/Settings';

export default function Desktop(props) {
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

  const [open, setOpen] = useState({
    showFolders: true,
    showShared: false,
    showPrivate: false,
    bgActive: 'red',
    bgInActive: 'green',
    fileId: 0,
    shared: [],
    private: [],
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
          open={open}
          setOpen={setOpen}
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
      {props.state.showTerminal ? (
        <Terminal
          open={open}
          setOpen={setOpen}
          code={code}
          setCode={setCode}
          state={props.state}
          setState={props.setState}
          user={props.user}
        ></Terminal>
      ) : null}
      {props.state.showSettings ? (
        <Settings
          open={open}
          setOpen={setOpen}
          state={props.state}
          setState={props.setState}
          user={props.user}
        ></Settings>
      ) : null}
    </div>
  );
}

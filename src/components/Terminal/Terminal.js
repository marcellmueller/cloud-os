import { useState, useEffect } from 'react';
import axios from 'axios';
import Window from '../Window';
import Line from './Line';
import './Terminal.scss';
export default function TerminalApp(props) {
  const name = props.user.firstname.toLowerCase() + '@linux';
  const [terminal, setTerminal] = useState({
    name: name,
    symbol: ':~$ ',
    input: '',
    output: [],
  });

  useEffect(() => {
    const data = {
      user_id: props.user.id,
    };

    Promise.all([axios.post('/open', data), axios.post('/open/shared', data)])
      .then((all) => {
        if (all[0].data || all[1].data) {
          props.setOpen({
            ...props.open,
            private: all[0].data,
            shared: all[1].data,
          });
        }
      })
      .catch(console.log('error'));
  }, []);

  const terminalEnter = (event) => {
    event.preventDefault();
    const output = [...terminal.output];
    const name = terminal.name + terminal.symbol;
    const content = terminal.input;
    let message = '';
    if (content.trim() === 'ls') {
      message = (
        <>
          <b>Private</b> <b>Shared</b>
        </>
      );
    }

    const privateFiles = props.open.private.map((file) => {
      return file.name + '.' + file.extension;
    });

    const sharedFiles = props.open.shared.map((file) => {
      return file.name + '.' + file.extension;
    });
    console.log(sharedFiles);
    if (content.trim() === 'cd Private') {
      message = <>{privateFiles.join(' ')}</>;
    }
    if (content.trim() === 'cd Shared') {
      message = <>{sharedFiles.join(' ')}</>;
    }
    if (content.trim() === 'whoami') {
      message = <>{props.user.firstname}</>;
    }
    if (content.trim() === 'rm') {
      message = (
        <>
          rm: missing operand
          <br />
          Try 'rm --help' for more information.
        </>
      );
    }
    if (content.trim() === 'rm --help') {
      message = <>Usage: rm [FILE]...</>;
    }
    if (content.trim() === 'rm Private') {
      message = <>rm: cannot remove 'Private': Is a directory</>;
    }
    if (content.trim() === 'rm Shared') {
      message = <>rm: cannot remove 'Shared': Is a directory</>;
    }

    if (content.trim() === 'rm -rf Private') {
      message = <>You don't have permission to delete this directory</>;
    }
    output.push({ name: name, content: content, message: message });
    setTerminal({
      ...terminal,
      output: output,
      input: '',
    });
  };

  const terminalName = terminal.name + terminal.symbol;
  const terminalInput = (event) => {
    setTerminal({
      ...terminal,
      input: event.target.value,
    });
  };
  let key = 0;
  const terminalOutput = terminal.output.map((line) => {
    key++;
    return (
      <Line
        key={key}
        name={line.name}
        message={line.message}
        content={line.content}
      />
    );
  });
  const display = (
    <div className="terminal">
      <div className="terminal-output">{terminalOutput}</div>
      <div className="input-div">
        <div className="terminal-input-name">{terminalName}</div>
        <div class="cursor">
          <form onSubmit={terminalEnter}>
            <input
              type="text"
              value={terminal.input}
              className="terminal-input"
              onChange={terminalInput}
            />
            <i></i>
          </form>
        </div>
      </div>
    </div>
  );
  return (
    <Window
      state={props.state}
      setState={props.setState}
      width={450}
      height={400}
      x={350}
      y={255}
      name={'Terminal'}
      display={display}
    ></Window>
  );
}

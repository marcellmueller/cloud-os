import { useState, useEffect } from 'react';
import Window from '../Window';
import Line from './Line';
import './Terminal.scss';
export default function TerminalApp(props) {
  console.log(props.user);
  const name = props.user.firstname.toLowerCase() + '@linux';
  const [terminal, setTerminal] = useState({
    name: name,
    symbol: ':~$ ',
    input: '',
    output: [],
  });

  // useEffect(() => {
  //   console.log(calcState);
  // }, [calcState]);
  const exampleFileSystem = {
    home: {
      type: 'FOLDER',
      children: {
        user: {
          type: 'FOLDER',
          children: null,
        },
        file1: {
          type: 'FILE',
          content: 'Contents of file 1',
          extension: 'txt',
        },
        dog: {
          type: 'FILE',
          content: 'asda',
          extension: 'png',
        },
      },
    },
    docs: {
      type: 'FOLDER',
      children: null,
    },
    blog: {
      type: 'FILE',
      content: 'asdasd',
      extension: 'txt',
    },
  };

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
    if (content.trim() === 'cd Private') {
      message = <>Private file listing</>;
    }
    if (content.trim() === 'cd Shared') {
      message = <>Shared file listing</>;
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

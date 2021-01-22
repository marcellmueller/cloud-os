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
    command: '',
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
      .catch();
  }, [terminal]);

  useEffect(() => {
    console.log(terminal.command);
  }, [terminal.command]);

  const deleteFile = (name, extension, user_id, shared) => {
    const data = { name, extension, user_id, shared };
    const URL = `/delete/`;
    const promise = axios
      .delete(URL, { data: data })
      .then((response) => {
        console.log(response);
        console.log('file deleted');
      })
      .catch(function (error) {
        console.log('error');
      });

    return promise;
  };

  //terminal commands function. Could probably use a refactor.
  const terminalEnter = (event) => {
    event.preventDefault();
    const output = [...terminal.output];
    const name = terminal.name + terminal.symbol;
    const content = terminal.input.trim();
    let message = 'Command not found';
    let command = terminal.command;
    const privateFiles = props.open.private.map((file) => {
      return file.name + '.' + file.extension;
    });

    const sharedFiles = props.open.shared.map((file) => {
      return file.name + '.' + file.extension;
    });

    if (content === 'help') {
      message = (
        <>
          GNU bash, version 2.0.17-release (x86_32-pc-linux-gnu) These shell
          commands are defined internally. Type 'help' to see this list.
          <br />
          . filename [arguments]
          <br />
          cd [filename/directory]
          <br />
          rm [filename]
          <br />
          rm -rf [directory]
          <br />
          whoami
          <br />
          help
          <br />
          ls
          <br />
        </>
      );
    }
    if (content === 'cd') {
      command = '';
      message = <></>;
    }
    if (content.length > 2 && content.slice(0, 2) === 'cd') {
      message = <>-bash: cd: No such file or directory</>;
    }
    if (content === 'cd Private') {
      command = 'private';
      message = <>/Private</>;
    }
    if (content === 'cd Shared') {
      command = 'shared';
      message = <>/Shared</>;
    }
    if (content === 'whoami') {
      message = <>{props.user.firstname.toLowerCase()}</>;
    }
    if (content === 'touch') {
      message = <>touch: missing file operand</>;
    }

    if (content.split(' ').length === 2 && content.split(' ')[0] === 'touch') {
      let file = content.split(' ')[1];
      if (content.split(' ') < 2) {
        message = <>please add a file extension!</>;
      }

      if (content.split(' ') > 2) {
        message = (
          <>Invalid file name, please use format [filename].[extension]</>
        );
      }
      if (file.length === 2) {
        let fileName = file.split('.')[0];
        let extension = file.split('.')[1];
        let shared = false;
        if (terminal.command === 'shared') {
          shared = true;
        }
        const data = {
          user_id: props.user.id,
          name: fileName,
          extension: extension,
          content: '',
          shared: shared,
        };
        const URL = `/save/`;
        const promise = axios
          .post(URL, data)
          .then((response) => {
            console.log(response);
            props.setSave({
              ...props.save,
              user_id: 0,
              name: '',
              extension: 'js',
              content: '',
              shared: false,
              error: false,
            });
          })
          .catch(function (error) {
            props.setSave({
              ...props.save,
              error: true,
            });
          });

        return promise;
      }
      message = <>{file} created</>;
    }

    //'rm [filename]' code
    if (content.split(' ').length === 2 && content.split(' ')[0] === 'rm') {
      let file = content.split(' ')[1];
      let fileName = file.split('.')[0];
      let extension = file.split('.')[1];
      let user_id = props.user.id;
      message = `${file} not found`;
      if (terminal.command === 'private' && privateFiles.includes(file)) {
        console.log('hello there');
        let shared = false;
        deleteFile(fileName, extension, user_id, shared);
        message = `${file} deleted`;
      }
      if (terminal.command === 'shared' && privateFiles.includes(file)) {
        console.log('hello there');
        let shared = true;
        deleteFile(fileName, extension, user_id, shared);
        message = `${file} deleted`;
      }
      setTerminal({
        ...terminal,
      });
    }

    if (content.split(' ').length > 2 && content.split(' ')[0] === 'rm') {
      message = '[rm] command has too many arguments';
    }

    //'rm [filename]' code ends

    //'code [filename]' code -- opens file in Code app
    if (content.split(' ').length === 2 && content.split(' ')[0] === 'code') {
      let file = content.split(' ')[1];
      let fileName = file.split('.')[0];
      if (terminal.command === 'private' && privateFiles.includes(file)) {
        let openFile = props.open.private.find((file, index) => {
          if (file.name == fileName) return props.open.private[index];
        });
        props.setCode({
          ...props.code,
          name: openFile.name,
          extension: openFile.extension,
          content: openFile.content,
        });
        props.setState({
          ...props.state,
          showMenu: false,
          showCalendar: false,
          showCode: true,
        });
        setTerminal({
          ...terminal,
        });
        message = `Opening ${file}...`;
      }
      if (terminal.command === 'shared' && privateFiles.includes(file)) {
        let openFile = props.open.shared.find((file, index) => {
          if (file.name == fileName) return props.open.shared[index];
        });
        props.setCode({
          ...props.code,
          name: openFile.name,
          extension: openFile.extension,
          content: openFile.content,
        });
        props.setState({
          ...props.state,
          showMenu: false,
          showCalendar: false,
          showCode: true,
        });
        setTerminal({
          ...terminal,
        });
        message = `Opening ${file}...`;
      }
    }

    if (content.split(' ').length > 2 && content.split(' ')[0] === 'code') {
      message = '[code] command has too many arguments';
    }

    //code [filename] code ends

    //rm code
    if (content === 'rm') {
      message = (
        <>
          rm: missing operand
          <br />
          Try 'rm --help' for more information.
        </>
      );
    }
    if (content === 'rm -rf') {
      message = (
        <>
          rm: missing operand
          <br />
          Try 'rm --help' for more information.
        </>
      );
    }
    if (content === 'rm -help') {
      message = <>Command not found. Did you mean 'rm --help' ?</>;
    }
    if (content === 'rm --help') {
      message = <>Usage: rm [OPTIONS]... [FILE]...</>;
    }
    if (content === 'rm Private') {
      message = <>rm: cannot remove 'Private': Is a directory</>;
    }
    if (content.trim() === 'rm Shared') {
      message = <>rm: cannot remove 'Shared': Is a directory</>;
    }

    if (content === 'rm -rf Private') {
      message = <>You don't have permission to delete this directory</>;
    }
    //rm code ends

    //ls code here
    if (content === 'ls') {
      if (terminal.command === '') {
        message = (
          <>
            <b>Private</b> <b>Shared</b>
          </>
        );
      }
      console.log(terminal.command);
      if (terminal.command === 'private') {
        message = <>{privateFiles.join(' ')}</>;
      }
      if (terminal.command === 'shared') {
        message = <>{sharedFiles.join(' ')}</>;
      }
    }
    //end ls code

    output.push({ name: name, content: content, message: message });
    setTerminal({
      ...terminal,
      output: output,
      input: '',
      command: command,
    });
  };

  //update state with terminal input as its typed
  const terminalName = terminal.name + terminal.symbol;
  const terminalInput = (event) => {
    setTerminal({
      ...terminal,
      input: event.target.value,
    });
  };

  //map terminal output
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

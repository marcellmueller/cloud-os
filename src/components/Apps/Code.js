import { useState } from 'react';
import './Code.scss';
import Window from '../Window';

export default function Code(props) {
  const [code, codeState] = useState('');

  const display = <div className="code-app"></div>;

  return (
    <Window
      state={props.state}
      setState={props.setState}
      name={'Code'}
      display={display}
    ></Window>
  );
}

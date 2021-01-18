import { useState } from 'react';
import './Code.scss';
import Window from '../Window';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

export default function Code(props) {
  function onChange(newValue) {
    props.setCode(newValue);
  }
  const display = (
    <AceEditor
      value={props.code}
      mode="javascript"
      theme="monokai"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
  );
  return (
    <Window
      state={props.state}
      setState={props.setState}
      name={'Code'}
      display={display}
    ></Window>
  );
}

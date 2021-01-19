import './Code.scss';
import Window from '../Window';
import CodeNav from './CodeNav';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

export default function Code(props) {
  function onChange(newValue) {
    props.setCode(newValue);
  }

  const display = (
    <>
      <CodeNav></CodeNav>
      <AceEditor
        value={props.code}
        mode="javascript"
        theme="monokai"
        width="100%"
        height="93%"
        className="code-editor"
        enableBasicAutocompletion="true"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        lockAspectRatio={true}
        editorProps={{ $blockScrolling: false }}
      />
    </>
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

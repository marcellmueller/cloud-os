import './Code.scss';
import Window from '../Window';
import CodeNav from './CodeNav';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/webpack-resolver';
export default function Code(props) {
  function onChange(newValue) {
    props.setCode(newValue);
  }

  const display = (
    <>
      <CodeNav
        code={props.code}
        setCode={props.setCode}
        state={props.state}
        setState={props.setState}
      ></CodeNav>
      <AceEditor
        value={props.code.content}
        mode="javascript"
        theme="monokai"
        width="100%"
        height="93%"
        className="code-editor"
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
      width={600}
      height={500}
      x={150}
      y={105}
      name={'Code'}
      display={display}
    ></Window>
  );
}

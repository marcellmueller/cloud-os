import './CodePopUp.scss';
import Window from '../Window';
import CodeNew from './CodeNew';
import CodeSave from './CodeSave';
import CodeOpen from './CodeOpen';

export default function CodePopUp(props) {
  console.log(props);
  const cancelClick = () => {
    props.setState({
      ...props.state,
      showCodePopUp: false,
    });
  };

  const newClick = () => {
    props.setState({
      ...props.state,
      showCodePopUp: false,
    });
    props.setCode({
      ...props.code,
      content: '',
    });
  };

  const newDisplay = (
    <CodeNew
      code={props.code}
      setState={props.setState}
      newClick={newClick}
      cancelClick={cancelClick}
    ></CodeNew>
  );

  const openDisplay = (
    <CodeOpen
      user={props.user}
      code={props.code}
      setCode={props.setCode}
      state={props.state}
      setState={props.setState}
      newClick={newClick}
      cancelClick={cancelClick}
    ></CodeOpen>
  );

  const saveDisplay = (
    <CodeSave
      user={props.user}
      code={props.code}
      state={props.state}
      setState={props.setState}
      newClick={newClick}
      cancelClick={cancelClick}
    ></CodeSave>
  );
  let width;
  let height;
  let display = newDisplay;
  if (props.code.new) {
    display = newDisplay;
    width = 260;
    height = 100;
  }

  if (props.code.open) {
    display = openDisplay;
    width = 400;
    height = 240;
  }
  if (props.code.save) {
    display = saveDisplay;
    width = 400;
    height = 240;
  }
  return (
    <Window
      state={props.state}
      setState={props.setState}
      width={width}
      height={height}
      x={200}
      y={205}
      name={'CodePopUp'}
      display={display}
    ></Window>
  );
}

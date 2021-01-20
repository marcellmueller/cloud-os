import { useState, useEffect } from 'react';
import Window from '../Window';
import './Tunes.scss';

export default function Loading(props) {
  const [tunes, setTunes] = useState('');
  // useEffect(() => {
  //   console.log(calcState);
  // }, [calcState]);

  const display = <div className="tunes">TUNES</div>;

  return (
    <Window
      state={props.state}
      setState={props.setState}
      width={450}
      height={400}
      x={350}
      y={255}
      name={'Tunes'}
      display={display}
    ></Window>
  );
}

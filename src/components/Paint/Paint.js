import { useState } from 'react';
import ReactPaint from 'react-paint';
import Window from '../Window';
import './Paint.scss';
export default function Paint(props) {
  // useEffect(() => {
  //   console.log(calcState);
  // }, [calcState]);

  const options = {
    style: {
      background: 'tomato',
      /* Arbitrary css styles */
    },
    brushCol: '#ffffff',
    lineWidth: 10,
    className: 'react-paint',
    height: 500,
    width: 500,
    onDraw: () => {
      console.log('i have drawn!');
    },
  };

  // const display = <ReactPaint {...options} />;
  return (
    <Window
      state={props.state}
      setState={props.setState}
      width={450}
      height={400}
      x={350}
      y={255}
      name={'Paint'}
      display={true}
    ></Window>
  );
}

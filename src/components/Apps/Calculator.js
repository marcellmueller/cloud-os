import { useState, useEffect } from 'react';
import Window from '../Window';
import './Calculator.scss';

export default function Loading(props) {
  const [calcState, setCalcState] = useState({
    screen: '0',
    num1: '0',
    num2: '0',
    operator: '+',
  });
  useEffect(() => {
    console.log(calcState);
  }, [calcState]);

  const getScreen = () => {
    let newScreen = calcState.screen;
    if (newScreen === '0') {
      newScreen = '';
      setCalcState({
        ...calcState,
        screen: newScreen,
      });
    }
    console.log(newScreen);

    return newScreen;
  };
  const calc1 = (event) => {
    let newScreen = getScreen();
    newScreen = newScreen + '' + 1;
    setCalcState({
      ...calcState,
      screen: newScreen,
    });
  };

  const calc2 = (event) => {
    let newScreen = getScreen();
    newScreen = newScreen + '' + 2;
    setCalcState({
      ...calcState,
      screen: newScreen,
    });
  };

  const calc3 = (event) => {
    let newScreen = getScreen();
    newScreen = newScreen + '' + 3;
    setCalcState({
      ...calcState,
      screen: newScreen,
    });
  };

  const calc4 = (event) => {
    let newScreen = getScreen();
    newScreen = newScreen + '' + 4;
    setCalcState({
      ...calcState,
      screen: newScreen,
    });
  };

  const calc5 = (event) => {
    let newScreen = getScreen();
    newScreen = newScreen + '' + 5;
    setCalcState({
      ...calcState,
      screen: newScreen,
    });
  };

  const calc6 = (event) => {
    let newScreen = getScreen();
    newScreen = newScreen + '' + 6;
    setCalcState({
      ...calcState,
      screen: newScreen,
    });
  };

  const calc7 = (event) => {
    let newScreen = getScreen();
    newScreen = newScreen + '' + 7;
    setCalcState({
      ...calcState,
      screen: newScreen,
    });
  };

  const calc8 = (event) => {
    let newScreen = getScreen();
    newScreen = newScreen + '' + 8;
    setCalcState({
      ...calcState,
      screen: newScreen,
    });
  };

  const calc9 = (event) => {
    let newScreen = getScreen();
    newScreen = newScreen + '' + 9;
    setCalcState({
      ...calcState,
      screen: newScreen,
    });
  };

  const calc0 = (event) => {
    let newScreen = getScreen();
    newScreen = newScreen + '' + 0;
    setCalcState({
      ...calcState,
      screen: newScreen,
    });
  };

  const operator = (op) => {
    if (calcState.num1 === '0') {
      let screen = calcState.screen;
      console.log('screen');
      setCalcState({
        ...calcState,
        num1: screen,
        screen: '0',
        operator: op,
      });
    }
    if (calcState.num1 !== '0') {
      let screen = calcState.screen;
      setCalcState({
        ...calcState,
        num2: screen,
        screen: '0',
      });
    }
  };

  const add = () => {
    const op = '+';
    operator(op);
  };

  const subtract = () => {
    const op = '-';
    operator(op);
  };

  const multiply = () => {
    const op = '*';
    operator(op);
  };

  const divide = () => {
    const op = '/';
    operator(op);
  };

  const clear = () => {
    setCalcState({
      ...calcState,
      screen: '0',
      num1: '0',
      num2: '0',
      operator: '-',
    });
  };

  const equals = () => {
    const operator = calcState.operator;
    let num1 = calcState.num1;
    let num2 = calcState.screen;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(num1, num2);
    let number = 0;
    if (operator === '+') {
      number = num1 + num2;
    }
    if (operator === '-') number = num1 - num2;
    if (operator === '*') number = num1 * num2;
    if (operator === '/') number = num1 / num2;
    console.log(number);
    setCalcState({
      ...calcState,
      screen: number,
      num1: '0',
      num2: '0',
      operator: '-',
    });
  };
  const calc = (
    <div className="calculator">
      <div id="calculator-screen">{calcState.screen}</div>
      <div onClick={calc1} className="calc-btn" id="calculator-1">
        1
      </div>
      <div onClick={calc2} className="calc-btn" id="calculator-2">
        2
      </div>
      <div onClick={calc3} className="calc-btn" id="calculator-3">
        3
      </div>
      <div onClick={calc4} className="calc-btn" id="calculator-4">
        4
      </div>
      <div onClick={calc5} className="calc-btn" id="calculator-5">
        5
      </div>
      <div onClick={calc6} className="calc-btn" id="calculator-6">
        6
      </div>
      <div onClick={calc7} className="calc-btn" id="calculator-7">
        7
      </div>
      <div onClick={calc8} className="calc-btn" id="calculator-8">
        8
      </div>
      <div onClick={calc9} className="calc-btn" id="calculator-9">
        9
      </div>
      <div onClick={calc0} className="calc-btn" id="calculator-0">
        0
      </div>
      <div onClick={clear} className="calc-btn" id="calculator-clear">
        Clear
      </div>
      <div onClick={add} className="calc-btn" id="calculator-add">
        +
      </div>
      <div onClick={subtract} className="calc-btn" id="calculator-subtract">
        -
      </div>
      <div onClick={divide} className="calc-btn" id="calculator-multiply">
        /
      </div>
      <div onClick={multiply} className="calc-btn" id="calculator-divide">
        *
      </div>
      <div onClick={equals} className="calc-btn" id="calculator-equals">
        =
      </div>
    </div>
  );

  return (
    <Window
      calcState={calcState}
      setCalcState={calcState}
      state={props.state}
      setState={props.setState}
      width={450}
      height={400}
      x={250}
      y={55}
      name={'Calculator'}
      display={calc}
    ></Window>
  );
}

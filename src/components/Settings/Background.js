import { useState } from 'react';
import './Background.scss';

export default function Background(props) {
  const [bg, setBg] = useState({
    about: true,
    background: false,
    theme: false,
    system: false,
    bgActive: 'darkgrey',
    bgInActive: 'lightgrey',
  });
  return <div className="settings-background"></div>;
}

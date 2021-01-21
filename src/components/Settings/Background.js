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
  return (
    <div className="settings-background">
      <div id="bg-red" className="bg-colors"></div>
      <div id="bg-blue" className="bg-colors"></div>
      <div id="bg-green" className="bg-colors"></div>
      <div id="bg-yellow" className="bg-colors"></div>
      <div id="bg-black" className="bg-colors"></div>
      <div id="bg-white" className="bg-colors"></div>
    </div>
  );
}

import { useState } from 'react';
import './Settings.scss';
import Window from '../Window';
import About from './About';
import Background from './Background';
import Theme from './Theme';
import System from './System';
export default function Settings(props) {
  const [tab, setTab] = useState({
    about: true,
    background: false,
    theme: false,
    system: false,
    bgActive: 'darkgrey',
    bgInActive: 'lightgrey',
  });

  const aboutTab = () => {
    setTab({
      ...tab,
      about: true,
      background: false,
      theme: false,
      system: false,
    });
  };

  const backgroundTab = () => {
    setTab({
      ...tab,
      about: false,
      background: true,
      theme: false,
      system: false,
    });
  };

  const themeTab = () => {
    setTab({
      ...tab,
      about: false,
      background: false,
      theme: true,
      system: false,
    });
  };

  const systemTab = () => {
    setTab({
      ...tab,
      about: false,
      background: false,
      theme: false,
      system: true,
    });
  };
  const display = (
    <div className="settings-tabs">
      <div className="settings-tab-parent">
        <nav className="nav-settings-tabs">
          <div
            onClick={aboutTab}
            style={{
              backgroundColor: tab.about ? tab.bgActive : tab.bgInActive,
            }}
            className="settings-tab"
          >
            About
          </div>
          <div
            onClick={backgroundTab}
            style={{
              backgroundColor: tab.background ? tab.bgActive : tab.bgInActive,
            }}
            className="settings-tab"
          >
            Background
          </div>
          <div
            onClick={themeTab}
            style={{
              backgroundColor: tab.theme ? tab.bgActive : tab.bgInActive,
            }}
            className="settings-tab"
          >
            Theme
          </div>
          <div
            onClick={systemTab}
            style={{
              backgroundColor: tab.system ? tab.bgActive : tab.bgInActive,
            }}
            className="settings-tab"
          >
            System
          </div>
        </nav>

        <div className="settings-main">
          {tab.about ? (
            <About
              {...props}
              setUser={props.setUser}
              error={props.error}
              setError={props.setError}
            ></About>
          ) : null}
          {tab.background ? (
            <Background
              {...props}
              setUser={props.setUser}
              error={props.error}
            ></Background>
          ) : null}
          {tab.theme ? (
            <Theme
              {...props}
              setUser={props.setUser}
              error={props.error}
            ></Theme>
          ) : null}
          {tab.system ? (
            <System
              {...props}
              setUser={props.setUser}
              error={props.error}
            ></System>
          ) : null}
        </div>
      </div>
    </div>
  );
  return (
    <Window
      state={props.state}
      setState={props.setState}
      width={600}
      height={500}
      x={150}
      y={105}
      name={'Settings'}
      display={display}
    ></Window>
  );
}

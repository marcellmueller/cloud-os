import { useState } from 'react';
import './CodeNav.scss';

export default function CodeNav(props) {
  const show = () => {
    props.setState({
      ...props.state,
      showCodePopUp: true,
    });
  };

  const showNew = () => {
    show();
    props.setCode({
      ...props.code,
      new: true,
      open: false,
      save: false,
    });
  };

  const showOpen = () => {
    show();
    props.setCode({
      ...props.code,
      new: false,
      open: true,
      save: false,
    });
  };

  const showSave = () => {
    show();
    props.setCode({
      ...props.code,
      new: false,
      open: false,
      save: true,
    });
  };
  return (
    <nav className="code-nav">
      <img
        alt="logo"
        onClick={showNew}
        className="new-file-icon"
        src="/img/icons/newfile.png"
      />
      <img
        alt="logo"
        onClick={showOpen}
        className="open-file-icon"
        src="/img/icons/open.png"
      />

      <img
        alt="logo"
        onClick={showSave}
        className="save-file-icon"
        src="/img/icons/savefile.png"
      />
    </nav>
  );
}

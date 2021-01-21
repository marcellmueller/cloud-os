import { useState, useEffect } from 'react';
import axios from 'axios';
import './CodeOpen.scss';
import File from './File';
export default function CodeOpen(props) {
  useEffect(() => {
    const data = {
      user_id: props.user.id,
    };

    Promise.all([axios.post('/open', data), axios.post('/open/shared', data)])
      .then((all) => {
        if (all[0].data || all[1].data) {
          props.setOpen({
            ...props.open,
            private: all[0].data,
            shared: all[1].data,
          });
        }
      })
      .catch(console.log('error'));
  }, []);

  const showFolders = () => {
    props.setOpen({
      ...props.open,
      showFolders: true,
      showPrivate: false,
      showShared: false,
    });
  };
  const showShared = () => {
    props.setOpen({
      ...props.open,
      showFolders: false,
      showPrivate: false,
      showShared: true,
    });
  };

  const showPrivate = () => {
    props.setOpen({
      ...props.open,
      showFolders: false,
      showPrivate: true,
      showShared: false,
    });
  };

  const selectFile = (event) => {
    props.setOpen({
      ...props.open,
      fileId: event.target.value,
    });
  };

  const openPrivate = () => {
    let file = props.open.private.find(
      (x) => parseInt(x.id) === parseInt(props.open.fileId)
    );
    console.log(file);
    props.setCode({
      ...props.code,
      name: file.name,
      extension: file.extension,
      content: file.content,
    });
    props.setState({
      ...props.state,
      showMenu: false,
      showCalendar: false,
      showCodePopUp: false,
    });
  };

  const openShared = () => {
    let file = props.open.shared.find(
      (x) => parseInt(x.id) === parseInt(props.open.fileId)
    );
    props.setCode({
      ...props.code,
      name: file.name,
      extension: file.extension,
      content: file.content,
    });
    props.setState({
      ...props.state,
      showMenu: false,
      showCalendar: false,
      showCodePopUp: false,
    });
  };
  const mapPrivate = props.open.private.map((file) => {
    return (
      <File
        key={file.id}
        id={file.id}
        name={file.name}
        extension={file.extension}
        selectFile={selectFile}
      />
    );
  });

  const mapShared = props.open.shared.map((file) => {
    return (
      <File
        key={file.id}
        id={file.id}
        name={file.name}
        extension={file.extension}
        selectFile={selectFile}
      />
    );
  });

  return (
    <>
      {props.open.showFolders ? (
        <div className="code-open">
          <div className="open-file-system" onClick={showPrivate}>
            <img
              alt="logo"
              id="open-private-icon"
              className="open-file-icon"
              src="/img/icons/open.png"
            />
            <h2 className="open-file-h3"> Private</h2>
          </div>
          <div className="open-file-system" onClick={showShared}>
            <img
              alt="logo"
              id="open-shared-icon"
              className="open-file-icon"
              src="/img/icons/open.png"
            />
            <h2 className="open-file-h3"> Shared</h2>
          </div>
        </div>
      ) : null}
      {props.open.showShared ? (
        <div className="open-file-shared">
          <select
            className="file-list"
            name="file-list"
            size={props.open.shared.length + 1}
          >
            {mapShared}
          </select>
          <div className="open-file-buttons">
            <button onClick={showFolders} className="open-code-button">
              Back
            </button>
            <button onClick={openShared} className="open-code-button">
              Open
            </button>
          </div>
        </div>
      ) : null}
      {props.open.showPrivate ? (
        <div className="open-file-private">
          <select
            className="file-list"
            name="file-list"
            size={props.open.private.length + 1}
          >
            {mapPrivate}
          </select>{' '}
          <div className="open-file-buttons">
            <button onClick={showFolders} className="open-code-button">
              Back
            </button>
            <button onClick={openPrivate} className="open-code-button">
              Open
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

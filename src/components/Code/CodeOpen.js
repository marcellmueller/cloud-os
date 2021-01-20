import { useState, useEffect } from 'react';
import axios from 'axios';
import './CodeOpen.scss';
import File from './File';
export default function CodeOpen(props) {
  const [open, setOpen] = useState({
    showFolders: true,
    showShared: false,
    showPrivate: false,
    bgActive: 'red',
    bgInActive: 'green',
    fileId: 0,
    shared: [],
    private: [],
  });

  useEffect(() => {
    const data = {
      user_id: props.user.id,
    };

    Promise.all([axios.post('/open', data), axios.post('/open/shared', data)])
      .then((all) => {
        if (all[0].data || all[1].data) {
          setOpen({
            ...open,
            private: all[0].data,
            shared: all[1].data,
          });
        }
      })
      .catch(console.log('error'));
  }, []);

  const showFolders = () => {
    setOpen({
      ...open,
      showFolders: true,
      showPrivate: false,
      showShared: false,
    });
  };
  const showShared = () => {
    setOpen({
      ...open,
      showFolders: false,
      showPrivate: false,
      showShared: true,
    });
  };

  const showPrivate = () => {
    setOpen({
      ...open,
      showFolders: false,
      showPrivate: true,
      showShared: false,
    });
  };

  const selectFile = (event) => {
    setOpen({
      ...open,
      fileId: event.target.value,
    });
  };

  const openPrivate = () => {
    let file = open.private.find(
      (x) => parseInt(x.id) === parseInt(open.fileId)
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
    let file = open.shared.find(
      (x) => parseInt(x.id) === parseInt(open.fileId)
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
  const mapPrivate = open.private.map((file) => {
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

  const mapShared = open.shared.map((file) => {
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
      {open.showFolders ? (
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
      {open.showShared ? (
        <div className="open-file-shared">
          <select
            className="file-list"
            name="file-list"
            size={open.shared.length + 1}
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
      {open.showPrivate ? (
        <div className="open-file-private">
          <select
            className="file-list"
            name="file-list"
            size={open.private.length + 1}
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

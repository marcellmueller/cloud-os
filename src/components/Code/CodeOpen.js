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

  const mapPrivate = open.private.map((file) => {
    return <File key={file.id} name={file.name} extension={file.extension} />;
  });

  const mapShared = open.shared.map((file) => {
    return <File key={file.id} name={file.name} extension={file.extension} />;
  });
  useEffect(() => {
    console.log(open);
  }, [open, mapPrivate, mapShared]);

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
          <div className="file-list">{mapShared}</div>
          <div className="open-file-buttons">
            <button onClick={showFolders} className="open-code-button">
              Back
            </button>
            <button onClick={showFolders} className="open-code-button">
              Open
            </button>
          </div>
        </div>
      ) : null}
      {open.showPrivate ? (
        <div className="open-file-private">
          <div className="file-list">{mapPrivate}</div>
          <div className="open-file-buttons">
            <button onClick={showFolders} className="open-code-button">
              Back
            </button>
            <button onClick={showFolders} className="open-code-button">
              Open
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

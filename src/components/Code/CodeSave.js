import { useState, useEffect } from 'react';
import axios from 'axios';
import './CodeSave.scss';
import Code from './Code';

export default function CodeSave(props) {
  const [save, setSave] = useState({
    user_id: 0,
    name: '',
    extension: 'js',
    content: '',
    shared: false,
    error: false,
  });

  useEffect(() => {
    setSave({
      ...save,
      name: props.code.name,
    });
  }, []);

  const nameOnChange = (event) => {
    setSave({
      ...save,
      name: event.target.value,
    });
  };

  const sharedOnChange = (event) => {
    setSave({
      ...save,
      shared: event.target.value === 'true' ? true : false,
    });
  };

  const extensionOnChange = (event) => {
    setSave({
      ...save,
      extension: event.target.value,
    });
  };

  const savePost = (event) => {
    event.preventDefault();
    const data = {
      user_id: props.user.id,
      name: save.name,
      extension: save.extension,
      content: props.code.content,
      shared: save.shared,
    };
    console.log(props.code);
    const URL = `/save/`;
    const promise = axios
      .post(URL, data)
      .then((response) => {
        console.log(response);
        setSave({
          ...save,
          user_id: 0,
          name: '',
          extension: 'js',
          content: '',
          shared: false,
          error: false,
        });
        props.setState({
          ...props.state,
          showCodePopUp: false,
        });
      })
      .catch(function (error) {
        setSave({
          ...save,
          error: true,
        });
      });

    return promise;
  };

  return (
    <div className="code-save">
      {' '}
      <form className="login-form" method="POST" action="/save">
        <h3>File Name:</h3>
        <input
          type="text"
          className="login-name"
          required
          pattern="[a-zA-Z0-9-_]+"
          name="lastName"
          value={save.name}
          onChange={nameOnChange}
        />
        <h3>Private or Shared:</h3>

        <select
          onChange={sharedOnChange}
          name="shared"
          className="shared-select"
        >
          <option value="true">Private</option>
          <option value="false">Shared</option>
        </select>
        <h3>File Extension:</h3>
        <select
          onChange={extensionOnChange}
          name="extension"
          className="file-extension"
        >
          <option value="js">js</option>
          <option value="html">html</option>
          <option value="txt">txt</option>
        </select>
        <button
          onClick={savePost}
          type="submit"
          id="save-button"
          className="login-button"
        >
          Save
        </button>
      </form>
      {save.error ? <div>Error Saving</div> : null}
    </div>
  );
}

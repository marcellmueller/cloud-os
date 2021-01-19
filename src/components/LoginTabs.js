import { useState } from 'react';
import './LoginTabs.scss';
import Login from './Login';
import Create from './Create';
export default function LoginTabs(props) {
  const [tab, setTab] = useState({
    login: true,
    create: false,
    bgActive: 'darkgrey',
    bgInActive: 'lightgrey',
  });

  const loginTab = () => {
    setTab({
      login: true,
      create: false,
      bgActive: 'darkgrey',
      bgInActive: 'lightgrey',
    });
  };

  const createTab = () => {
    setTab({
      login: false,
      create: true,
      bgActive: 'lightgrey',
      bgInActive: 'darkgrey',
    });
  };
  return (
    <div className="login-tabs">
      <div className="tab-parent">
        <nav className="nav-tabs">
          <div
            onClick={loginTab}
            style={{ backgroundColor: tab.bgActive }}
            className="login-tab"
          >
            Login
          </div>
          <div
            onClick={createTab}
            style={{ backgroundColor: tab.bgInActive }}
            className="create-tab"
          >
            New Account
          </div>
        </nav>

        <div className="tabs-main">
          {tab.login ? (
            <Login
              {...props}
              setUser={props.setUser}
              error={props.error}
              setError={props.setError}
              setMessage={props.setMessage}
            ></Login>
          ) : null}
          {tab.create ? (
            <Create
              {...props}
              setUser={props.setUser}
              error={props.error}
              setError={props.setError}
              setMessage={props.setMessage}
            ></Create>
          ) : null}
        </div>
      </div>
    </div>
  );
}

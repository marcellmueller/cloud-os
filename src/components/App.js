import { useState, useEffect } from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.scss';
import Bios from './Startup/Bios';
import Loading from './Startup/Loading';
import Nav from './nav/Nav';
import LoginTabs from './LoginTabs';
import Desktop from './Desktop';

export default function App() {
  const [state, setState] = useState({
    showMenu: false,
    showCalendar: false,
    showCalculator: false,
    showCode: false,
    showCodePopUp: false,
    openApps: [],
  });

  const [user, setUser] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   Promise.all([axios.get('/login'), axios.get('/users'), axios.get('/posts')])
  //     .then((all) => {
  //       if (all[0].data) {
  //         setUser(all[0].data);
  //         history.push('/');
  //       } else {
  //         setUser('');
  //         history.push('/login');
  //       }
  //       if (all[1].data) {
  //         setUsers(all[1].data);
  //       }
  //       if (all[2].data) {
  //         setPosts(all[2].data);
  //       }
  //     })
  //     .catch(console.log('error'));
  // }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <BrowserRouter>
      <div className="App">
        <section className="main-container">
          <Route
            exact
            path="/"
            render={(props) =>
              user ? (
                <>
                  <Nav
                    setUser={setUser}
                    user={user}
                    state={state}
                    setState={setState}
                    setError={setError}
                  ></Nav>
                  <Desktop
                    {...props}
                    user={user}
                    setUser={setUser}
                    state={state}
                    setState={setState}
                  />
                </>
              ) : (
                <Redirect to="/login"></Redirect>
              )
            }
            replace
          />
          <Route
            path="/login"
            render={(props) => (
              <LoginTabs
                {...props}
                setUser={setUser}
                error={error}
                setError={setError}
                setMessage={setMessage}
              />
            )}
          />

          <Route
            exact
            path="/bios"
            render={(props) => <Bios {...props} message={message} />}
            replace
          />
          <Route
            exact
            path="/loading"
            render={(props) => <Loading {...props} message={message} />}
            replace
          />
          {/* <Route
            path="/account"
            render={(props) => (
              <Account
                {...props}
                user={user}
                setUser={setUser}
                error={error}
                setError={setError}
              />
            )}
            replace
          /> */}
        </section>
      </div>
    </BrowserRouter>
  );
}

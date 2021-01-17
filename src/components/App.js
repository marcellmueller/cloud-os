import { useState } from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.scss';

import Nav from './nav/Nav';
import Login from './Login';

import Desktop from './Desktop';

export default function App() {
  const [state, setState] = useState({
    showMenu: false,
    showCalendar: false,
  });
  const [user, setUser] = useState('');
  // const [users, setUsers] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  // const [posts, setPosts] = useState('');
  // const getUser = () => {
  //   const promise = axios.get('/login').then((response) => {
  //     if (response.data) {
  //       setUser(response.data);
  //       history.push('/');
  //     } else {
  //       setUser('');
  //       history.push('/login');
  //     }
  //   });
  //   return promise;
  // };

  // const getUsers = () => {
  //   const promise = axios
  //     .get('/users')
  //     .then((response) => {
  //       if (response.data) {
  //         setUsers(response.data);
  //       }
  //     })
  //     .catch(console.log('error'));
  //   return promise;
  // };

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
              <Login
                {...props}
                setUser={setUser}
                error={error}
                setError={setError}
                setMessage={setMessage}
              />
            )}
          />
          {/* <Route
            path="/create"
            render={(props) => (
              <Create
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
            path="/message"
            render={(props) => <Message {...props} message={message} />}
            replace
          />

          <Route
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

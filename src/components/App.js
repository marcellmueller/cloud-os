import { useState, useEffect } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import axios from 'axios';
import './App.scss';
import Nav from './Nav';
import Login from './Login';
import Create from './Create';
import Home from './Home';
const history = createBrowserHistory();
export default function App() {
  const [user, setUser] = useState('');

  const getUser = () => {
    const promise = axios.get('/login').then((response) => {
      if (response.data) {
        setUser(response.data);
        history.push('/');
      } else {
        user(false);
      }
    });
    return promise;
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <HashRouter history={history}>
      <div className="App">
        <Nav history={history} setUser={setUser} user={user}></Nav>
        <section className="main-container">
          <Route
            exact
            path="/"
            render={(props) => (
              <Home {...props} user={user} setUser={setUser} />
            )}
          />
          <Route
            path="/login"
            render={(props) => <Login {...props} setUser={setUser} />}
          />
          <Route path="/create" component={Create} />
        </section>
      </div>
    </HashRouter>
  );
}

import { useState, useEffect } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.scss';
import Nav from './Nav';
import Login from './Login';
import Create from './Create';
import Home from './Home';
const history = createBrowserHistory();
export default function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <HashRouter history={history}>
      <div className="App">
        <Nav setUsername={setUser} username={user}></Nav>
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

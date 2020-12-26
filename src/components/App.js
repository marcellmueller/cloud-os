import { useState } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './App.scss';
import Nav from './Nav';
import Login from './Login';
import Create from './Create';
import Home from './Home';

export default function App() {
  const [username, setUsername] = useState('');
  return (
    <HashRouter>
      <div className="App">
        <Nav username={username}></Nav>
        <section className="main-container">
          <Route exact path="/" component={Home} />
          <Route setUsername={setUsername} path="/login" component={Login} />
          <Route path="/create" component={Create} />
        </section>
      </div>
    </HashRouter>
  );
}

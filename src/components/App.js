import { Route, NavLink, HashRouter } from 'react-router-dom';
import './App.scss';
import Nav from './Nav';
import Login from './Login';
import Create from './Create';
import Home from './Home';

export default function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav></Nav>
        <section className="main-container">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/create" component={Create} />
        </section>
      </div>
    </HashRouter>
  );
}

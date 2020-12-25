import { Route, HashRouter } from 'react-router-dom';
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
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/create" component={Create} />
        </section>
      </div>
    </HashRouter>
  );
}

import './App.scss';
import Nav from './Nav';
export default function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <section className="main-container">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/stuff">Stuff</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </section>
    </div>
  );
}

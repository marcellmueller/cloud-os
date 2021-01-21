import './Line.scss';

export default function User(props) {
  return (
    <div className="terminal-line-div">
      <section className="terminal-line">
        <div className="terminal-line-name">{props.name}</div>
        <div className="terminal-line-content">{props.content}</div>
      </section>
      <div className="terminal-output-div">{props.message}</div>
    </div>
  );
}

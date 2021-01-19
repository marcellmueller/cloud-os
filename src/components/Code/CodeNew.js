import './CodeNew.scss';

export default function CodeNew(props) {
  return (
    <div className="code-new">
      <button onClick={props.newClick} className="code-button">
        New
      </button>
      <button onClick={props.cancelClick} className="code-button">
        Cancel
      </button>
    </div>
  );
}

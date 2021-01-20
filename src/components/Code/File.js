import './File.scss';

export default function User(props) {
  return (
    <option className="file-name" value={props.id} onClick={props.selectFile}>
      {' '}
      {props.name + '.' + props.extension}{' '}
    </option>
  );
}

import './File.scss';

export default function User(props) {
  return (
    <section className="file">
      <div style={{ backgroundColor: props.bg }} className="user-card-id">
        {props.name + '.' + props.extension}
      </div>
    </section>
  );
}

import './MenuItem.scss';

export default function MenuItem(props) {
  return (
    <section className="menu-item">
      <div className="menu-item-name">{props.name}</div>
    </section>
  );
}

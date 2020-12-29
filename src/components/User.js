import './User.scss';

export default function User(props) {
  const formatDate = () => {
    return props.userSince.slice(0, 10);
  };
  return (
    <section className="user-card">
      <div className="user-card-id">{props.id}</div>
      <div className="user-card-firstname">{props.firstName}</div>
      <div className="user-card-lastname">{props.lastName}</div>
      <div className="user-card-email">{props.email}</div>
      <div className="user-card-user-since">{formatDate()}</div>
    </section>
  );
}

import './User.scss';

export default function User(props) {
  // useEffect(() => {
  //   return !props.user ? props.history.push('/login') : null;
  // }, []);
  return (
    <section className="user-card">
      <div className="user-card-firstname">{props.firstName}</div>
      <div className="user-card-lastname">{props.lastName}</div>
      <div className="user-card-email">{props.email}</div>
    </section>
  );
}

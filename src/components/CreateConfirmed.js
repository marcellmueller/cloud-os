import './CreateConfirmed.scss';

export default function Login(props) {
  setTimeout(() => {
    props.history.push('/login');
  }, 2500);

  return (
    <section id="create-confirm" className="login">
      <h2 className="create-confirm-h2">Account Created</h2>
      <h3 className="create-confirm-h3">Redirecting to login...</h3>
    </section>
  );
}

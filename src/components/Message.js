import './Message.scss';

export default function Message(props) {
  console.log(props.message);
  setTimeout(() => {
    props.history.push('/login');
  }, 2500);

  return (
    <section id="create-confirm" className="login">
      <h2 className="create-confirm-h2">{props.message}</h2>
      <h3 className="create-confirm-h3">Redirecting to login...</h3>
    </section>
  );
}

import './Message.scss';

export default function Message(props) {
  console.log(props.message);
  setTimeout(() => {
    if (props.message === 'Account created') {
      props.history.push('/login');
    } else if (props.message === 'Login verified') {
      props.history.push('/');
    }
  }, 2500);

  return (
    <section id="create-confirm" className="login">
      <h2 className="create-confirm-h2">{props.message}</h2>
      <h3 className="create-confirm-h3">Redirecting...</h3>
    </section>
  );
}

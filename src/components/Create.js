import './Create.scss';

export default function Create() {
  return (
    <section className="login">
      <form className="login-form" method="POST" action="/login">
        <h2 id="login-title">Create User</h2>
        <h3>First Name:</h3>
        <input type="text" className="login-name" required name="email" />
        <h3>Last Name:</h3>
        <input type="text" className="login-name" required name="email" />
        <h3>Email:</h3>
        <input type="email" id="login-email" required name="email" />
        <h3>Password:</h3>
        <input
          type="password"
          minLength="6"
          id="login-password"
          required
          name="email"
        />
        <h3>Re-enter Password:</h3>
        <input
          type="password"
          minLength="6"
          id="login-password"
          required
          name="email"
        />
        <button type="submit" id="login-button">
          Login
        </button>
      </form>
    </section>
  );
}

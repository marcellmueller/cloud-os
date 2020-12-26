import './Create.scss';

export default function Create() {
  return (
    <section className="login">
      <form className="login-form" method="POST" action="/login">
        <h2 id="login-title">Create User</h2>
        <label for="create-first-name">First Name:</label>
        <input type="text" className="login-name" required name="email" />
        <label for="create-last-name">Last Name:</label>
        <input type="text" className="login-name" required name="email" />
        <label for="login-email">Email:</label>
        <input type="email" id="login-email" required name="email" />
        <label for="login-password">Password:</label>
        <input
          type="password"
          minLength="6"
          id="login-password"
          required
          name="email"
        />
        <label for="login-password">Re-enter Password:</label>
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

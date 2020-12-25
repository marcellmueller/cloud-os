import { useState } from 'react';
import './Login.scss';

export default function Login() {
  return (
    <section className="login">
      <form className="login-form" method="POST" action="/login">
        <h2 id="login-title">Login</h2>
        <label for="login-email">Email:</label>
        <input type="email" id="login-email" required name="email" />
        <label for="login-email">Password:</label>
        <input type="password" id="login-password" required name="email" />
        <button type="submit" id="login-button">
          Login
        </button>
      </form>
    </section>
  );
}

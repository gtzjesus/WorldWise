import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/FakeAuthContext';
import { useNavigate } from 'react-router-dom';
import PageNav from '../components/PageNav';
import Button from '../components/Button';
import styles from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('jack@example.com');
  const [password, setPassword] = useState('qwerty');

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (email && password) login(email, password);
  }
  useEffect(
    function () {
      if (isAuthenticated) navigate('/app', { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <main>
      <PageNav />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">email address</label>
          <input
            type="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </div>
        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}

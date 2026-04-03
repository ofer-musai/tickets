import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLoginMutation } from '../../services/api/hooks/useAuthMutations';
import { useAuth } from '../../contexts/AuthContext';
import { styles } from './Login.styles';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const { mutate: login, isPending, error } = useLoginMutation();

  const [form, setForm] = useState({ email: '', password: '' });
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname ?? '/dashboard';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login(form, {
      onSuccess: ({ token, user }) => {
        auth.login(token, user);
        navigate(from, { replace: true });
      },
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.glow1} />
      <div style={styles.glow2} />
      <div style={styles.card}>
        <p style={styles.eyebrow}>Creator Portal</p>
        <h1 style={styles.heading}>
          Welcome <span className="gradient-text">back.</span>
        </h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Email</label>
            <input style={styles.input} type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
          </div>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Password</label>
            <input style={styles.input} type="password" name="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
          </div>
          {error && <p style={styles.error}>{error.message}</p>}
          <button style={styles.submitBtn} className="btn-primary" type="submit" disabled={isPending}>
            {isPending ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <p style={styles.footer}>
          Don't have an account?{' '}
          <Link to="/register" style={styles.link}>Register</Link>
        </p>
      </div>
    </div>
  );
}

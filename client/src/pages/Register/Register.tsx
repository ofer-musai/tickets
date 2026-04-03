import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../services/api/hooks/useAuthMutations';
import { useAuth } from '../../contexts/AuthContext';
import { styles } from './Register.styles';

export default function Register() {
  const navigate = useNavigate();
  const auth = useAuth();
  const { mutate: register, isPending, error } = useRegisterMutation();

  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [localError, setLocalError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalError('');
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setLocalError('Passwords do not match');
      return;
    }
    register({ name: form.name, email: form.email, password: form.password }, {
      onSuccess: ({ token, user }) => {
        auth.login(token, user);
        navigate('/dashboard', { replace: true });
      },
    });
  };

  const displayError = localError || error?.message;

  return (
    <div style={styles.page}>
      <div style={styles.glow1} />
      <div style={styles.glow2} />
      <div style={styles.card}>
        <p style={styles.eyebrow}>Creator Portal</p>
        <h1 style={styles.heading}>
          Join <span className="gradient-text">TicketFlow.</span>
        </h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Name</label>
            <input style={styles.input} type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
          </div>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Email</label>
            <input style={styles.input} type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
          </div>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Password</label>
            <input style={styles.input} type="password" name="password" placeholder="Min. 8 characters" value={form.password} onChange={handleChange} required />
          </div>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Confirm Password</label>
            <input style={styles.input} type="password" name="confirmPassword" placeholder="••••••••" value={form.confirmPassword} onChange={handleChange} required />
          </div>
          {displayError && <p style={styles.error}>{displayError}</p>}
          <button style={styles.submitBtn} className="btn-primary" type="submit" disabled={isPending}>
            {isPending ? 'Creating account...' : 'Create Account'}
          </button>
        </form>
        <p style={styles.footer}>
          Already have an account?{' '}
          <Link to="/login" style={styles.link}>Sign in</Link>
        </p>
      </div>
    </div>
  );
}

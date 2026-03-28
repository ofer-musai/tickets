import { useNavigate, useLocation } from 'react-router-dom';
import { styles } from './Navbar.styles';

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div style={styles.wrapper}>
      <nav style={styles.nav}>
        <div style={styles.logo} onClick={() => navigate('/')}>
          <span style={styles.logoPrimary}>Ticket</span>
          <span style={styles.logoSecondary}>Flow</span>
        </div>
        {pathname !== '/create' && (
          <button style={styles.createBtn} className="btn-outline-cyan" onClick={() => navigate('/create')}>
            🎤 Create Event
          </button>
        )}
      </nav>
      {pathname !== '/' && (
        <button style={styles.backBtn} onClick={() => navigate(-1)}>← Back</button>
      )}
    </div>
  );
}

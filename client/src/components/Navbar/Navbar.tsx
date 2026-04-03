import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { styles } from './Navbar.styles';

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  const hiddenPaths = ['/create', '/dashboard', '/login', '/register'];
  const showCreateBtn = !hiddenPaths.includes(pathname);
  const showBackBtn = pathname !== '/' && pathname !== '/login' && pathname !== '/register';

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <div style={styles.wrapper}>
      <nav style={styles.nav}>
        <div style={styles.logo} onClick={() => navigate('/')}>
          <span style={styles.logoPrimary}>Ticket</span>
          <span style={styles.logoSecondary}>Flow</span>
        </div>
        <div style={styles.navRight}>
          {isAuthenticated ? (
            <>
              <div style={styles.userPill}>
                <div style={styles.avatar}>
                  {user!.name.slice(0, 2).toUpperCase()}
                </div>
                <span style={styles.userName}>{user!.name.split(' ')[0]}</span>
              </div>
              {pathname !== '/dashboard' && (
                <button style={styles.myEventsBtn} className="btn-outline-muted" onClick={() => navigate('/dashboard')}>
                  My Events
                </button>
              )}
              <button style={styles.createBtn} className="btn-outline-cyan" onClick={() => navigate('/create')}>
                🎤 Create Event
              </button>
              <button style={styles.logoutBtn} onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              {pathname !== '/login' && (
                <button style={styles.loginBtn} className="btn-outline-muted" onClick={() => navigate('/login')}>
                  Login
                </button>
              )}
              {showCreateBtn && (
                <button style={styles.createBtn} className="btn-outline-cyan" onClick={() => navigate('/create')}>
                  🎤 Create Event
                </button>
              )}
            </>
          )}
        </div>
      </nav>
      {showBackBtn && (
        <button style={styles.backBtn} onClick={() => navigate(-1)}>← Back</button>
      )}
    </div>
  );
}

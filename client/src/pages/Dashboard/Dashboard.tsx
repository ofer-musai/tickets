import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMyConcerts } from '../../services/api/hooks/useMyConcerts';
import { useAuth } from '../../contexts/AuthContext';
import EditDrawer from '../../components/EditDrawer/EditDrawer';
import type { Concert } from '../../services/api/api';
import { styles } from './Dashboard.styles';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { data: concerts, isLoading } = useMyConcerts();
  const [editTarget, setEditTarget] = useState<Concert | null>(null);

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div style={styles.glow} />
        <p style={styles.eyebrow}>Creator Portal</p>
        <h1 style={styles.heading}>
          Your <span className="gradient-text">Stage</span>, {user?.name.split(' ')[0]}
        </h1>
      </div>

      <div style={styles.content}>
        {isLoading ? (
          <p style={{ color: '#8A8AA0' }}>Loading your concerts...</p>
        ) : !concerts || concerts.length === 0 ? (
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}>🎤</div>
            <div style={styles.emptyTitle}>No events yet</div>
            <p style={styles.emptyText}>Create your first concert and start selling tickets.</p>
            <button style={styles.emptyBtn} className="btn-primary" onClick={() => navigate('/create')}>
              🎟️ Create Event
            </button>
          </div>
        ) : (
          <div style={styles.list}>
            {concerts.map((concert) => (
              <div key={concert._id ?? concert.id} style={styles.card}>
                {concert.imageUrl ? (
                  <img src={concert.imageUrl} alt={concert.title} style={styles.cardImg} />
                ) : (
                  <div style={styles.cardImgPlaceholder} />
                )}
                <div style={styles.cardBody}>
                  <div style={styles.cardTitle}>{concert.title}</div>
                  <div style={styles.cardMeta}>{concert.venue} · {concert.date}</div>
                  <div style={styles.cardTickets}>
                    {concert.ticketsAvailable} / {concert.ticketCount} tickets available
                  </div>
                  <div style={styles.cardActions}>
                    <button style={styles.viewBtn} onClick={() => navigate(`/concert/${concert._id ?? concert.id}`)}>
                      View
                    </button>
                    <button style={styles.editBtn} onClick={() => setEditTarget(concert)}>
                      Edit
                    </button>
                  </div>
                </div>
                <div style={styles.priceBadge}>${concert.price}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <EditDrawer concert={editTarget} onClose={() => setEditTarget(null)} />
    </div>
  );
}

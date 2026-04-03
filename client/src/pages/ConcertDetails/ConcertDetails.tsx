import { useParams, useNavigate } from 'react-router-dom';
import { styles } from './ConcertDetails.styles';
import { styles as common } from '../../styles/common.styles';
import { useGetConcert } from '../../services/api/hooks/useConcert';

export default function ConcertDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: concert, isLoading, error } = useGetConcert(id);

  if (isLoading) {
    return (
      <div style={common.page}>

        <div style={{ textAlign: 'center', padding: '6rem 2rem', color: '#4A4A6A' }} className="loading-pulse">
          Loading concert...
        </div>
      </div>
    );
  }

  if (error || !concert) {
    return (
      <div style={common.page}>

        <div style={{ textAlign: 'center', padding: '6rem 2rem', color: '#4A4A6A' }}>
          Concert not found. <button onClick={() => navigate('/')} style={{ color: '#FF2E63', background: 'none', border: 'none', cursor: 'pointer' }}>Go back</button>
        </div>
      </div>
    );
  }

  return (
    <div style={common.page}>
      {/* Hero image */}
      <div style={styles.heroWrap}>
        <img src={concert.imageUrl} alt={concert.title} style={styles.heroImage} />
        <div style={styles.heroOverlay} />
<span style={styles.heroBadge}>🎟️ On Sale</span>
      </div>

      {/* Main content */}
      <div style={styles.content}>
        <h1 style={styles.title}>{concert.title}</h1>

        {/* Meta chips */}
        <div style={styles.metaRow}>
          <div style={styles.metaChip}>
            <span style={styles.metaChipIcon}>📅</span>
            {concert.date}
          </div>
          <div style={styles.metaChip}>
            <span style={styles.metaChipIcon}>📍</span>
            {concert.venue}
          </div>
          <div style={styles.metaChip}>
            <span style={styles.metaChipIcon}>🎫</span>
            Starting from ${concert.price}
          </div>
          <div style={styles.metaChip}>
            <span style={styles.metaChipIcon}>⏰</span>
            Doors open at {concert.doorsOpen}
          </div>
        </div>

        <div style={styles.divider} />

        {/* About */}
        <div style={styles.sectionLabel}>About This Event</div>
        <p style={styles.aboutText}>{concert.description}</p>

        {/* Highlights */}
        <div style={styles.sectionLabel}>Event Highlights</div>
        <div style={styles.highlights}>
          {concert.highlights.map((h) => (
            <div key={h.label} style={styles.highlightCard}>
              <div style={styles.highlightIcon}>{h.icon}</div>
              <div style={styles.highlightLabel}>{h.label}</div>
              <div style={styles.highlightValue}>{h.value}</div>
            </div>
          ))}
        </div>

        <div style={styles.divider} />

        {/* Buy section */}
        <div style={styles.buySection}>
          <div style={styles.priceBlock}>
            <div style={styles.priceLabel}>Ticket Price</div>
            <div style={styles.priceValue}>${concert.price}</div>
            <div style={styles.priceNote}>per person · includes all fees</div>
          </div>
          <button style={styles.buyBtn} className="btn-primary" onClick={() => navigate(`/buy/${id}`)}>
            🎟️ Buy Ticket Now
          </button>
        </div>
      </div>
    </div>
  );
}

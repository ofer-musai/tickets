import type { Concert } from '../../services/api/api';
import { styles } from './EventCard.styles';

interface EventCardProps {
  event: Concert;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div style={styles.card} className="card-hover card-hover-cyan">
      <div style={styles.banner}>
        <img src={event.imageUrl} alt={event.title} style={styles.image} />
        <div style={styles.bannerOverlay} />
      </div>
      <div style={styles.body}>
        <div style={styles.title}>{event.title}</div>
        <div style={styles.meta}>
          📅 {event.date}<br />
          📍 {event.venue}
        </div>
        <div style={styles.footer}>
          <span style={styles.price}>{event.price}</span>
          <button style={styles.buyBtn} className="btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

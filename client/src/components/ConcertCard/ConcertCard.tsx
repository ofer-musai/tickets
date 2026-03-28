import type { Concert } from '../../services/api/api';
import { styles } from './ConcertCard.styles';

interface ConcertCardProps {
  concert: Concert;
  onClick: () => void;
  index?: number;
}

export default function ConcertCard({ concert, onClick }: ConcertCardProps) {
  return (
    <div style={styles.card} className="card-hover" onClick={onClick}>
      <div style={styles.banner}>
        <img src={concert.imageUrl} alt={concert.title} style={styles.image} />
        <div style={styles.bannerOverlay} />
      </div>
      <div style={styles.body}>
        <div style={styles.info}>
          <div style={styles.title}>{concert.title}</div>
          <div style={styles.meta}>
            📅 {concert.date}<br />
            📍 {concert.venue}
          </div>
        </div>
        <div style={styles.price}>{concert.price}</div>
      </div>
    </div>
  );
}

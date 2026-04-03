import type { Concert } from '../../services/api/api';
import ConcertForm from '../ConcertForm/ConcertForm';
import { styles } from './EditDrawer.styles';

interface EditDrawerProps {
  concert: Concert | null;
  onClose: () => void;
}

export default function EditDrawer({ concert, onClose }: EditDrawerProps) {
  if (!concert) return null;

  const concertId = concert._id ?? concert.id;

  return (
    <>
      <div style={styles.overlay} onClick={onClose} />
      <div style={styles.drawer}>
        <div style={styles.header}>
          <span style={styles.title}>Edit Concert</span>
          <button style={styles.closeBtn} onClick={onClose} aria-label="Close">×</button>
        </div>
        <ConcertForm
          mode="edit"
          initialValues={concert}
          concertId={concertId}
          onSuccess={onClose}
        />
      </div>
    </>
  );
}

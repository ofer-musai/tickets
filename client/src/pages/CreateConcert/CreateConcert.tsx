import { styles } from './CreateConcert.styles';
import ConcertForm from '../../components/ConcertForm/ConcertForm';

export default function CreateConcert() {
  return (
    <div style={styles.page}>
      <div className="glow-blob-pink" style={{ width: '600px', height: '400px', top: '-120px', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="glow-blob-cyan" style={{ width: '400px', height: '300px', top: '200px', right: '-100px' }} />
      <div style={styles.inner}>
        <div style={styles.header}>
          <p style={styles.eyebrow}>Artist Portal</p>
          <h1 style={styles.heading}>
            Create your <span className="gradient-text">concert.</span>
          </h1>
          <p style={styles.sub}>Fill in the details below and your event will be live instantly.</p>
        </div>
        <ConcertForm />
      </div>
    </div>
  );
}

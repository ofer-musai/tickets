import { useNavigate } from 'react-router-dom';
import { styles } from './PageHeader.styles';

interface PageHeaderProps {
  title: string;
  backTo?: string;
}

export default function PageHeader({ title, backTo = '/' }: PageHeaderProps) {
  const navigate = useNavigate();
  return (
    <div style={styles.header}>
      <button style={styles.back} className="btn-outline-muted" onClick={() => navigate(backTo)}>
        ← Back
      </button>
      <h1 style={styles.title}>{title}</h1>
    </div>
  );
}

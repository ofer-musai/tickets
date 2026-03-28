import type { ChangeEvent, FormEvent } from 'react';
import { styles } from './SearchBar.styles';

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function SearchBar({ value, onChange, onSubmit }: SearchBarProps) {
  return (
    <form style={styles.wrap} className="search-wrap" onSubmit={onSubmit}>
      <input
        style={styles.input}
        placeholder="Search artist, concert or venue..."
        value={value}
        onChange={onChange}
        autoFocus
      />
      <button style={styles.btn} className="btn-primary" type="submit">
        Search
      </button>
    </form>
  );
}

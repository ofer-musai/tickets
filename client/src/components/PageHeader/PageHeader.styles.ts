import type { CSSProperties } from 'react';
import { colors, fontSize, fontWeight, borderRadius } from '../../styles/tokens';

export const styles: Record<string, CSSProperties> = {
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '40px',
  },
  back: {
    background: 'none',
    border: `1px solid ${colors.borderDefault}`,
    color: colors.textSecondary,
    borderRadius: borderRadius.sm,
    padding: '7px 16px',
    cursor: 'pointer',
    fontSize: fontSize.lg,
  },
  title: {
    fontSize: fontSize.xl8,
    fontWeight: fontWeight.black,
    color: colors.textPrimary,
    margin: 0,
    letterSpacing: '-0.01em',
  },
};

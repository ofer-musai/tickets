import type { CSSProperties } from 'react';
import { colors, fontSize, fontWeight, borderRadius } from '../../styles/tokens';

export const styles: Record<string, CSSProperties> = {
  wrap: {
    display: 'flex',
    maxWidth: '620px',
    margin: '0 auto',
    backgroundColor: colors.bgCard,
    border: `1px solid ${colors.borderDefault}`,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    minWidth: 0,
    backgroundColor: 'transparent',
    border: 'none',
    padding: '16px 21px',
    fontSize: fontSize.xl2,
    color: colors.textPrimary,
    outline: 'none',
  },
  btn: {
    background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
    border: 'none',
    color: colors.textWhite,
    padding: '0 32px',
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
    cursor: 'pointer',
    letterSpacing: '1.6px',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },
};

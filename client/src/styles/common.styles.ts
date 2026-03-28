import type { CSSProperties } from 'react';
import { NAVBAR_HEIGHT } from '../constants';
import { colors, fontSize, fontWeight, borderRadius } from './tokens';

export const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
    fontFamily: "'Inter', sans-serif",
    backgroundColor: colors.bgBase,
    color: colors.textPrimary,
  },
  eyebrow: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.bold,
    letterSpacing: '3.2px',
    textTransform: 'uppercase',
    color: colors.textSecondary,
  },
  sectionLabel: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.bold,
    color: colors.textSecondary,
    letterSpacing: '3.2px',
    textTransform: 'uppercase',
  },
  label: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    color: colors.textSecondary,
    letterSpacing: '1.6px',
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: colors.bgBase,
    border: `1px solid ${colors.borderDefault}`,
    borderRadius: borderRadius.md,
    padding: '13px 16px',
    color: colors.textPrimary,
    fontSize: fontSize.xl,
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    appearance: 'none',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
};

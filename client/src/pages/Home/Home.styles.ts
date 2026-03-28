import type { CSSProperties } from 'react';
import { styles as common } from '../../styles/common.styles';
import { colors, fontSize, fontWeight, borderRadius } from '../../styles/tokens';

export const styles: Record<string, CSSProperties> = {
  heroSection: {
    position: 'relative',
    textAlign: 'center',
    padding: '96px 24px 64px',
    overflow: 'hidden',
  },
  heroEyebrow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    ...common.eyebrow,
    color: colors.primary,
    letterSpacing: '5.6px',
    marginBottom: '24px',
  },
  eyebrowLine: {
    width: '32px',
    height: '1px',
    backgroundColor: colors.primary,
    opacity: 0.5,
    display: 'inline-block',
  },
  heroTitle: {
    fontSize: fontSize.display6,
    fontWeight: fontWeight.black,
    lineHeight: 1.1,
    marginBottom: '16px',
    letterSpacing: '-0.02em',
    color: colors.textPrimary,
  },
  heroSub: {
    fontSize: fontSize.lg,
    color: colors.textSecondary,
    letterSpacing: '2.4px',
    textTransform: 'uppercase',
    marginBottom: '40px',
  },

  statsSection: {
    maxWidth: '760px',
    margin: '0 auto 64px',
    padding: '0 24px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    border: `1px solid ${colors.borderDefault}`,
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
  },
  statItem: {
    textAlign: 'center',
    padding: '24px 16px',
    borderRight: `1px solid ${colors.borderDefault}`,
  },
  statItemLast: {
    textAlign: 'center',
    padding: '24px 16px',
  },
  statNumber: {
    fontSize: fontSize.xl8,
    fontWeight: fontWeight.black,
    display: 'block',
    marginBottom: '3px',
  },
  statLabel: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    letterSpacing: '1.9px',
    textTransform: 'uppercase',
  },

  divider: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    maxWidth: '760px',
    margin: '0 auto 32px',
    padding: '0 24px',
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    backgroundColor: colors.borderDefault,
  },
  dividerDots: {
    fontSize: fontSize.xxs,
    color: colors.primary,
    letterSpacing: '6.4px',
    opacity: 0.7,
  },

  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    maxWidth: '760px',
    margin: '0 auto 19px',
    padding: '0 24px',
  },
  sectionLabel: { ...common.sectionLabel, whiteSpace: 'nowrap' },
  sectionLine: {
    flex: 1,
    height: '1px',
    backgroundColor: colors.borderDefault,
  },
  resultCount: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    whiteSpace: 'nowrap',
  },

  listSection: {
    maxWidth: '760px',
    margin: '0 auto',
    padding: '0 24px 96px',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  empty: {
    textAlign: 'center',
    color: colors.borderDefault,
    padding: '64px 0',
    fontSize: fontSize.xl2,
  },

  footer: {
    borderTop: `1px solid ${colors.borderSubtle}`,
    padding: '24px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLogo: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.black,
    letterSpacing: '2.9px',
    textTransform: 'uppercase',
  },
  footerCopy: {
    fontSize: fontSize.sm,
    color: colors.borderDefault,
    letterSpacing: '1.3px',
  },
};

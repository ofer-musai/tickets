import type { CSSProperties } from 'react';
import { styles as common } from '../../styles/common.styles';
import { colors, fontSize, fontWeight, borderRadius, zIndex } from '../../styles/tokens';

export const styles: Record<string, CSSProperties> = {
  heroWrap: {
    position: 'relative',
    height: '480px',
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(to top, ${colors.bgBase} 0%, ${colors.overlayMedium} 50%, ${colors.overlayLight} 100%)`,
  },
  heroBadge: {
    position: 'absolute',
    top: '24px',
    right: '32px',
    background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
    color: colors.textWhite,
    borderRadius: borderRadius.full,
    padding: '6px 16px',
    fontSize: fontSize.base,
    fontWeight: fontWeight.bold,
    letterSpacing: '1.6px',
    textTransform: 'uppercase',
    zIndex: zIndex.overlay,
  },

  content: {
    maxWidth: '820px',
    margin: '0 auto',
    padding: '0 32px 96px',
    marginTop: '-80px',
    position: 'relative',
    zIndex: zIndex.raised,
  },
  title: {
    fontSize: fontSize.display4,
    fontWeight: fontWeight.black,
    color: colors.textPrimary,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    marginBottom: '19px',
  },

  metaRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '19px',
    marginBottom: '40px',
  },
  metaChip: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: colors.bgCard,
    border: `1px solid ${colors.borderDefault}`,
    borderRadius: borderRadius.sm,
    padding: '9px 16px',
    fontSize: fontSize.lg,
    color: colors.textPrimary,
  },
  metaChipIcon: {
    fontSize: fontSize.xl2,
  },

  divider: {
    height: '1px',
    backgroundColor: colors.borderSubtle,
    margin: '32px 0',
  },

  sectionLabel: { ...common.sectionLabel, marginBottom: '13px' },
  aboutText: {
    fontSize: fontSize.xl2,
    color: colors.textMuted,
    lineHeight: 1.8,
    marginBottom: '40px',
  },

  highlights: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginBottom: '40px',
  },
  highlightCard: {
    backgroundColor: colors.bgCard,
    border: `1px solid ${colors.borderDefault}`,
    borderRadius: borderRadius.lg,
    padding: '19px',
    textAlign: 'center',
  },
  highlightIcon: {
    fontSize: '24px',
    marginBottom: '8px',
  },
  highlightLabel: {
    fontSize: fontSize.base,
    color: colors.textSecondary,
    letterSpacing: '1.6px',
    textTransform: 'uppercase',
    marginBottom: '4px',
  },
  highlightValue: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.textPrimary,
  },

  buySection: {
    backgroundColor: colors.bgCard,
    border: `1px solid ${colors.borderDefault}`,
    borderRadius: borderRadius.xl,
    padding: '29px 32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '32px',
  },
  priceBlock: {},
  priceLabel: {
    fontSize: fontSize.base,
    color: colors.textSecondary,
    letterSpacing: '1.9px',
    textTransform: 'uppercase',
    marginBottom: '5px',
  },
  priceValue: {
    fontSize: fontSize.display3,
    fontWeight: fontWeight.black,
    color: colors.primary,
    lineHeight: 1,
  },
  priceNote: {
    fontSize: fontSize.base,
    color: colors.textSecondary,
    marginTop: '5px',
  },
  buyBtn: {
    background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
    color: colors.textWhite,
    border: 'none',
    borderRadius: borderRadius.lg,
    padding: '16px 48px',
    fontWeight: fontWeight.black,
    fontSize: fontSize.xl2,
    cursor: 'pointer',
    letterSpacing: '1.3px',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
};

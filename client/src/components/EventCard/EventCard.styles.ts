import type { CSSProperties } from 'react';
import { colors, fontSize, fontWeight, borderRadius } from '../../styles/tokens';

export const styles: Record<string, CSSProperties> = {
  card: {
    backgroundColor: colors.bgCard,
    border: `1px solid ${colors.borderDefault}`,
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
  },
  banner: {
    height: '160px',
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.4s ease',
  },
  bannerOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(11,11,15,0.65) 0%, transparent 60%)',
  },
  body: { padding: '19px' },
  title: {
    fontSize: fontSize.xl2,
    fontWeight: fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: '5px',
  },
  meta: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    marginBottom: '16px',
    lineHeight: 1.7,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: fontSize.xl4,
    fontWeight: fontWeight.black,
    color: colors.primary,
  },
  buyBtn: {
    background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
    color: colors.textWhite,
    border: 'none',
    borderRadius: borderRadius.sm,
    padding: '8px 19px',
    fontWeight: fontWeight.bold,
    fontSize: fontSize.md,
    cursor: 'pointer',
    letterSpacing: '1.3px',
    textTransform: 'uppercase',
  },
};

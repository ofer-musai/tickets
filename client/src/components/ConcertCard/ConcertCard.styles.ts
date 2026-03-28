import type { CSSProperties } from 'react';
import { colors, fontSize, fontWeight, borderRadius } from '../../styles/tokens';

export const styles: Record<string, CSSProperties> = {
  card: {
    backgroundColor: colors.bgCard,
    border: `1px solid ${colors.borderDefault}`,
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    cursor: 'pointer',
  },
  banner: {
    height: '200px',
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
    background: `linear-gradient(to top, ${colors.overlayDark} 0%, ${colors.overlayLight} 60%, transparent 100%)`,
  },
  body: {
    padding: '19px 22px 22px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: '16px',
  },
  info: { flex: 1, minWidth: 0 },
  title: {
    fontSize: fontSize.xl3,
    fontWeight: fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: '6px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  meta: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    lineHeight: 1.75,
  },
  price: {
    fontSize: fontSize.xl5,
    fontWeight: fontWeight.black,
    color: colors.primary,
    flexShrink: 0,
  },
};

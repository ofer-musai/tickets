import type { CSSProperties } from 'react';
import { styles as common } from '../../styles/common.styles';
import { colors, fontSize, fontWeight, zIndex } from '../../styles/tokens';

export const styles: Record<string, CSSProperties> = {
  page: {
    ...common.page,
    position: 'relative',
    overflow: 'hidden',
  },
  inner: {
    maxWidth: '780px',
    margin: '0 auto',
    padding: '32px 32px 96px',
    position: 'relative',
    zIndex: zIndex.raised,
  },
  header: {
    textAlign: 'center',
    marginBottom: '48px',
    paddingTop: '16px',
  },
  eyebrow: { ...common.eyebrow, marginBottom: '12px' },
  heading: {
    fontSize: fontSize.display5,
    fontWeight: fontWeight.black,
    letterSpacing: '-0.03em',
    lineHeight: 1.1,
    margin: '0 0 16px',
  },
  sub: {
    fontSize: fontSize.xl2,
    color: colors.textSecondary,
    margin: 0,
  },
};

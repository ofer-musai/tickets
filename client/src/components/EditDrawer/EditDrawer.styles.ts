import type { CSSProperties } from 'react';
import { colors, fontSize, fontWeight, zIndex } from '../../styles/tokens';

export const styles: Record<string, CSSProperties> = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: colors.overlayDark,
    zIndex: zIndex.overlay,
  },
  drawer: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: 'min(580px, 100vw)',
    height: '100vh',
    backgroundColor: colors.bgBase,
    borderLeft: `1px solid ${colors.borderDefault}`,
    overflowY: 'auto',
    zIndex: zIndex.overlay + 1,
    padding: '32px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px',
  },
  title: {
    fontSize: fontSize.xl8,
    fontWeight: fontWeight.black,
    color: colors.textPrimary,
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: colors.textMuted,
    fontSize: fontSize.display1,
    cursor: 'pointer',
    lineHeight: 1,
    padding: '0 4px',
  },
};

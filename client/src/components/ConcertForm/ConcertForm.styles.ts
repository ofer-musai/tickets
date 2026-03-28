import type { CSSProperties } from 'react';
import { styles as common } from '../../styles/common.styles';
import { colors, fontSize, fontWeight, borderRadius } from '../../styles/tokens';

export const styles: Record<string, CSSProperties> = {
  form: {
    backgroundColor: colors.bgCard,
    border: `1px solid ${colors.borderDefault}`,
    borderRadius: borderRadius.xxl,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '19px',
    padding: '8px 0 24px',
  },
  sectionLabel: {
    ...common.sectionLabel,
    color: colors.primary,
    margin: 0,
  },
  divider: {
    height: '1px',
    backgroundColor: colors.borderSubtle,
    margin: '8px 0 24px',
  },
  textarea: {
    ...common.input,
    resize: 'vertical',
    fontFamily: "'Inter', sans-serif",
    lineHeight: 1.6,
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  imagePreview: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: borderRadius.md,
    border: `1px solid ${colors.borderDefault}`,
  },
  submitBtn: {
    background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
    color: colors.textWhite,
    border: 'none',
    borderRadius: borderRadius.lg,
    padding: '16px',
    fontWeight: fontWeight.black,
    fontSize: fontSize.xl,
    cursor: 'pointer',
    marginTop: '16px',
    letterSpacing: '1.6px',
    textTransform: 'uppercase',
    width: '100%',
  },

  success: {
    backgroundColor: colors.bgCard,
    border: `1px solid ${colors.borderDefault}`,
    borderRadius: borderRadius.xxl,
    padding: '64px 32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    textAlign: 'center',
  },
  successIcon: {
    fontSize: fontSize.display5,
    marginBottom: '8px',
  },
  successTitle: {
    fontSize: fontSize.xl7,
    fontWeight: fontWeight.black,
    color: colors.textPrimary,
  },
  successSub: {
    fontSize: fontSize.xl,
    color: colors.textSecondary,
    marginBottom: '16px',
  },
  successBtn: {
    background: 'none',
    border: `1px solid ${colors.borderDefault}`,
    borderRadius: borderRadius.md,
    color: colors.textPrimary,
    padding: '11px 32px',
    fontSize: fontSize.lg,
    cursor: 'pointer',
    letterSpacing: '1.3px',
  },
};

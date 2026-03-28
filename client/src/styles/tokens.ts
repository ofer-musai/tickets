export const colors = {
  // Brand
  primary: '#FF2E63',
  primaryDark: '#e0196b',
  secondary: '#08D9D6',

  // Backgrounds
  bgBase: '#0B0B0F',
  bgCard: '#13131A',

  // Borders & dividers
  borderSubtle: '#1C1C28',
  borderDefault: '#2A2A3D',

  // Text
  textPrimary: '#EAEAEA',
  textSecondary: '#4A4A6A',
  textMuted: '#8A8AA0',
  textWhite: '#fff',

  // Transparent overlays
  bgNavbar: 'rgba(11,11,15,0.92)',
  overlayMedium: 'rgba(11,11,15,0.5)',
  overlayLight: 'rgba(11,11,15,0.1)',
  overlayDark: 'rgba(11,11,15,0.7)',

  // Brand transparent
  primaryBg: 'rgba(255,46,99,0.15)',
  primaryBorder: 'rgba(255,46,99,0.3)',

  // White transparent
  whiteFaint: 'rgba(255,255,255,0.07)',
  whiteMuted: 'rgba(255,255,255,0.3)',
  whiteLight: 'rgba(255,255,255,0.65)',
  whiteSoft: 'rgba(255,255,255,0.7)',
} as const;

export const fontSize = {
  xxs: '9px',
  xs: '10px',
  sm: '11px',
  base: '12px',
  md: '13px',
  lg: '14px',
  xl: '15px',
  xl2: '16px',
  xl3: '17px',
  xl4: '18px',
  xl5: '20px',
  xl6: '21px',
  xl7: '22px',
  xl8: '26px',
  xl9: '29px',
  xl10: '30px',
  display1: '32px',
  display2: '35px',
  display3: '40px',
  display4: '45px',
  display5: '48px',
  display6: '64px',
} as const;

export const fontWeight = {
  semibold: 600,
  bold: 700,
  black: 900,
} as const;

export const borderRadius = {
  xs: '1px',
  sm: '8px',
  md: '10px',
  lg: '12px',
  xl: '16px',
  xxl: '20px',
  full: '999px',
  circle: '50%',
} as const;

export const zIndex = {
  base: 0,
  raised: 1,
  overlay: 10,
  navbar: 50,
} as const;

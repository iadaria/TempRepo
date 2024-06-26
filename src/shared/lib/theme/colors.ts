export enum TypeColor {
  Prime = 'primary',
  Second = 'secondary',
}

export enum Size {
  default = 1,
  small = 0.4,
}

export const colorPallete = {
  light: {
    [TypeColor.Prime]: '#0D0D0D',
    [TypeColor.Second]: '#15BE77',
    text: '#FFFFFF',
    placeholder: 'rgba(255, 255, 255, 0.3)',
    input: 'rgba(255, 255, 255, 0.1)',
    interactive: 'rgba(255, 255, 255, 0.1)',
    red: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },
    green: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16',
    },
    orange: {
      10: '#FF8E4C',
    },
  },
  dark: {},
};

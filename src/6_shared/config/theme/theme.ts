import { DefaultTheme } from '@react-navigation/native';
import { colors } from '@src/6_shared/lib/theme';

export const theme: ReactNavigation.Theme = {
  ...DefaultTheme,
  colors: {
    primary: colors.primary,
    background: colors.primary,
    card: colors.primary,
    text: 'white',
    border: colors.primary,
    notification: 'rgb(255, 59, 48)',
  },
};

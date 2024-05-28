import theme from '@src/shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  logo: { flex: 0.9, alignItems: 'center' },
  logoTitle: {
    fontFamily: 'Viga-Regular',
    color: theme.secondary,
    fontSize: 40,
    textAlignVertical: 'bottom',
    marginBottom: -7,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    color: 'white',
    fontSize: 13,
    letterSpacing: 1,
  },
});
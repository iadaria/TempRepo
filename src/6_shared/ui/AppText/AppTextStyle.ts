import { debugStyles } from '@src/6_shared/consts/debug';
import { colors } from '@src/6_shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontFamily: 'benton-sans-bold',
    textTransform: 'capitalize',
    //..debugStyles.blue,
  },
  h1: {
    fontSize: 31,
  },

  h2: {
    fontSize: 22,
  },
  h3: {
    fontSize: 16,
  },
  h4: {
    fontSize: 15,
  },
  h5: {
    fontSize: 12,
    letterSpacing: 0.43,
  },
  white: {
    color: 'white',
  },
  orange: {
    color: colors.orange[20],
  },
  grey: {
    color: colors.text,
  },
  black: {
    color: '#0D0D0D',
  },
  green: {
    color: colors.green[10],
  },
  regular: {
    fontFamily: 'benton-sans-regular',
  },
  bold: {
    fontFamily: 'benton-sans-bold',
  },
  medium: {
    fontFamily: 'benton-sans-medium',
  },
  center: {
    textAlign: 'center',
  },
});

import { debugStyles } from '@src/6_shared/consts/debug';
import { colors } from '@src/6_shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  text: {
    color: 'white',
    textTransform: 'capitalize',
    fontFamily: 'benton-sans-bold',
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
  white: {
    color: 'white',
  },
  orange: {
    color: colors.orange[20],
  },
  grey: {
    color: colors.text,
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
    ...debugStyles.red,
  },
});

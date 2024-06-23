import { colors } from '@src/shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  text: {
    color: 'white',
  },
  title: {
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 31,
    fontFamily: 'benton-sans-bold',
  },
});

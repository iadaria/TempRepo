import { debugStyles } from '@src/shared/consts/debug';
import { colors } from '@src/shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  box: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 30,
  },
  text: {
    color: 'white',
  },
  title: {
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 31,
    fontFamily: 'benton-sans-bold',
    ...debugStyles.blue,
  },
  buttonIcon: {
    flex: 0,
    paddingHorizontal: 16,
  },
});

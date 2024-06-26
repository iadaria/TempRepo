import { debugStyles } from '@src/shared/consts/debug';
import { colors } from '@src/shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  subtitle: {
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 15,
    fontFamily: 'benton-sans-bold',
  },
  buttonIcon: {
    flex: 0,
    padding: 15,
  },
});

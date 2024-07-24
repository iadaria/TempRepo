import { colors } from '@src/6_shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  add: {
    width: 115,
    height: 30,
    alignSelf: 'center',
    //backgroundColor: 'red',
  },
  reoder: {
    width: 115,
    height: 30,
    alignSelf: 'center',

    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  process: {
    width: 115,
    height: 30,
    alignSelf: 'center',

    borderRadius: 15,
    backgroundColor: colors.green[10],
    justifyContent: 'center',
  },
});

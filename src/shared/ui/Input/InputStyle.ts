import { debugStyles } from '@src/shared/consts/debug';
import { colors } from '@src/shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.input,
    height: 57,
    borderRadius: 15,
  },
  // http://hex2rgba.devoth.com/
  input: {
    flex: 1,
    color: 'white',
    fontFamily: 'Inter-Regular',
    paddingVertical: 19,
    paddingHorizontal: 28,
  },
  error: {
    color: colors.red[700],
    paddingHorizontal: 15,
  },
  errorInput: {
    borderWidth: 1,
    borderColor: colors.red[700],
  },
  liconwrapper: {
    paddingLeft: 28,
  },
  licon: {
    position: 'absolute',
    top: 15,
    left: 18,
  },
});

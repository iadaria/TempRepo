import { colors } from '@src/shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // http://hex2rgba.devoth.com/
  input: {
    backgroundColor: colors.input,
    height: 57,
    paddingVertical: 21,
    paddingHorizontal: 28,
    color: 'white',
    fontFamily: 'Inter-Regular',
    borderRadius: 15,
  },
  error: {
    color: colors.red[700],
    paddingHorizontal: 15,
  },
  errorInput: {
    borderWidth: 1,
    borderColor: colors.red[700],
  },
});

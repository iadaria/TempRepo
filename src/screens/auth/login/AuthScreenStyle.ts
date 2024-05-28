import theme from '@src/shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary, // 1
    //paddingHorizontal: 25,
  },
  interface: {
    flex: 1,
    rowGap: 21,
    paddingHorizontal: 25,
  },
  group: { rowGap: 12 },
  // http://hex2rgba.devoth.com/
  input: {
    backgroundColor: theme.input,
    height: 57,
    paddingVertical: 21,
    paddingHorizontal: 28,
    color: 'white',
    fontFamily: 'Inter-Regular',
    borderRadius: 15,
  },
  //https://freefontsfamily.net/benton-sans-font/
  text: {
    color: 'white',
    fontFamily: 'Inter-Medium',
    //marginVertical: 20,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    letterSpacing: 0.5,
    alignSelf: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 21,
    backgroundColor: theme.input,
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  row: {
    flexDirection: 'row',
    columnGap: 21,
  },
  ownButton: {
    height: 57,
    alignSelf: 'center',
    justifyContent: 'center',

    borderRadius: 15,
    width: '40%',
    backgroundColor: theme.secondary,
    marginTop: 36 - 21,
  },
});

import { colors } from '@src/6_shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary, // 1
    //paddingHorizontal: 25,
  },
  interface: {
    flex: 1,
    rowGap: 21,
    paddingHorizontal: 25,
  },
  group: { rowGap: 12 },
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
  row: {
    flexDirection: 'row',
    columnGap: 21,
    justifyContent: 'center',
  },
});

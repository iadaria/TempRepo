import { debugStyles } from '@src/6_shared/consts/debug';
import { BOX_PADDING, GAP, WIDTH } from '@src/6_shared/consts/dimentsions';
import { colors } from '@src/6_shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  restCard: {
    //1
    minWidth: (WIDTH - BOX_PADDING * 2 - GAP) / 2,
    height: 184,
    backgroundColor: colors.interface,
    // 2
    alignItems: 'center',
    borderRadius: 15,
    //
    justifyContent: 'flex-end',
    paddingBottom: 26,
  },
  name: {
    // 2
    color: 'white',
    fontSize: 16,
    fontFamily: 'benton-sans-bold',
    //...debugStyles.blue,
  },
  itemContainer: {
    alignItems: 'center',
    marginTop: 13,
    //...debugStyles.red,
  },
  time: {
    color: colors.text,
    fontSize: 13,
  },
  bottom: {
    marginBottom: 184 + GAP + 70,
  },
});

import { colors } from '@src/6_shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    // 1
    backgroundColor: colors.interface,
    height: 87,
    borderRadius: 15,
    //2
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    height: 64,
    width: 64,
  },
  textAndPriceWrapper: {
    flex: 1,
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
    maxWidth: '55%',
    marginLeft: 13,
  },
});

import { debugStyles } from '@src/6_shared/consts/debug';
import { colors } from '@src/6_shared/lib/theme';
import { f } from 'node_modules/msw/lib/core/HttpResponse-B07UKAkU';
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
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
  },
});

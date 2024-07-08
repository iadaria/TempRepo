import { BOX_PADDING, GAP } from '@src/6_shared/consts/dimentsions';
import { colors } from '@src/6_shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  box: {
    //flex: 1,
    paddingTop: 60,
    paddingHorizontal: BOX_PADDING,
    gap: GAP,
    paddingBottom: 150, // for menu
  },
});

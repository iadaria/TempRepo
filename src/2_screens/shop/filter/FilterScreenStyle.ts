import { GAP } from '@src/6_shared/consts/dimentsions';
import { colors } from '@src/6_shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.interface,
    borderRadius: 15,
  },
  items: {
    flexDirection: 'row',
    gap: GAP,
    flexWrap: 'wrap',
  },
  selected: {
    backgroundColor: 'rgba(48, 208, 128, 0.4)',
  },
});

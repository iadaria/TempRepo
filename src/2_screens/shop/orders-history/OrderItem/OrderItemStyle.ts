import { GAP } from '@src/6_shared/consts/dimentsions';
import { colors } from '@src/6_shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  order: {
    flexDirection: 'row',
    gap: GAP,
    padding: 15,
    borderRadius: 15,
    backgroundColor: colors.interface,
  },
});

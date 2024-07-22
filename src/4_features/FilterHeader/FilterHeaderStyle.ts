import { colors } from '@src/6_shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.interface,
    borderRadius: 15,
    flexDirection: 'row',
  },
  items: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
});

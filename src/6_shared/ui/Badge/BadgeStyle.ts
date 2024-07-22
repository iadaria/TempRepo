import { colors } from '@src/6_shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -5,
    right: 0,
    width: 18,
    height: 18,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 0,
    backgroundColor: colors.red[500],
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    position: 'absolute',
    top: -5,
    right: -3,
    width: 18,
    height: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 30,
    backgroundColor: colors.red[500],
  },
});

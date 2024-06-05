import { colors } from '@src/shared/lib/theme';
import { TypeColor } from '@src/shared/lib/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 21,
    backgroundColor: colors.interactive,
    height: 57,
    borderRadius: 15,
  },
  secondary: {
    backgroundColor: colors[TypeColor.Second],
  },
  pressed: {
    opacity: 0.5,
  },
});
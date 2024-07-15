import { colors } from '@src/6_shared/lib/theme';
import { TypeColor } from '@src/6_shared/lib/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 21,
    backgroundColor: colors.interface,
    height: 57,
    borderRadius: 15,
  },
  secondary: {
    backgroundColor: colors[TypeColor.Second],
  },
  pressed: {
    opacity: 0.5,
  },
  disabled: {
    opacity: 0.6,
  },
});

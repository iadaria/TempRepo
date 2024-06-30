import { colors } from '@src/6_shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //marginBottom: 15,
  },
  headerLink: {
    color: colors.orange[10],
    fontSize: 12,
    fontFamily: 'BentonSans-Regular',
  },
});

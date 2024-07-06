import { colors } from '@src/6_shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
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

  restCard: {
    //1
    width: 147,
    height: 184,
    backgroundColor: colors.interface,
    // 2
    alignItems: 'center',
    borderRadius: 15,
  },
  name: {
    // 2
    color: 'white',
    fontSize: 16,
    fontFamily: 'benton-sans-bold',
    //...debugStyles.blue,
  },
});

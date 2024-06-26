import { debugStyles } from '@src/shared/consts/debug';
import { colors } from '@src/shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  title: {
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 31,
    fontFamily: 'benton-sans-bold',
    ...debugStyles.blue,
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
  header: {
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 15,
    fontFamily: 'benton-sans-bold',
  },
  buttonIcon: {
    flex: 0,
    padding: 15,
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
    ...debugStyles.blue,
  },
  restImg: {},
  itemContainer: {},
});

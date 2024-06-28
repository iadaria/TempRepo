import { debugStyles } from '@src/6_shared/consts/debug';
import { colors } from '@src/6_shared/lib/theme';
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
    backgroundColor: 'red',
  },
  restCard: {
    //1
    width: 147,
    height: 184,
    backgroundColor: colors.interface,
    // 2
    alignItems: 'center',
    borderRadius: 15,
    //
    justifyContent: 'flex-end',
    paddingBottom: 26,
  },
  name: {
    // 2
    color: 'white',
    fontSize: 16,
    fontFamily: 'benton-sans-bold',
    //...debugStyles.blue,
  },
  itemContainer: {
    alignItems: 'center',
    marginTop: 13,
    //...debugStyles.red,
  },
  time: {
    color: colors.text,
    fontSize: 13,
  },
});

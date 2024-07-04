import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    //...debugStyles.red,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  selected: {
    backgroundColor: 'rgba(48, 208, 128, 0.1)',
  },
  unselected: {
    height: '100%',
  },
});

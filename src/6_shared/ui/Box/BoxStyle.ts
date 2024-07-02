import { colors } from '@src/6_shared/lib/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  box: {
    //flex: 1,
    paddingTop: 60,
    paddingHorizontal: 25,
    gap: 20,
  },
});

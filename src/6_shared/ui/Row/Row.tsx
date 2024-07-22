import { StyleProp, View, ViewStyle } from 'react-native';
import { styles } from './RowStyle';

type RowProps = {
  children: React.ReactNode;
  gap?: number;
  style?: StyleProp<ViewStyle>;
};

export const Row = ({ children, style, gap = 0 }: RowProps) => {
  return <View style={[styles.group, { gap }, style]}>{children}</View>;
};

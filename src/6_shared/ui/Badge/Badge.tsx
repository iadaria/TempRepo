import { Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { styles } from './BadgeStyle';

interface BadgeProps {
  amount: number;
  icon: React.FC<SvgProps>;
}

export const Badge = ({ icon: Icon, amount }: BadgeProps) => {
  return (
    <View>
      <Icon />
      {Boolean(amount) && <Text style={styles.badgeText}>{amount}</Text>}
    </View>
  );
};

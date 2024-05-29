import { TypeColor } from '@src/shared/lib/theme/colors';
import { Pressable, PressableProps } from 'react-native';
import { styles as s } from './ButtonStyle';

interface ButtonProps extends PressableProps {
  type?: TypeColor;
  [TypeColor.Second]: boolean;
}

export const Button = ({ children, type = TypeColor.Prime }: ButtonProps) => {
  return <Pressable style={s.button}>{children}</Pressable>;
};

import { Pressable, PressableProps } from 'react-native';
import { styles } from './ButtonStyle';
import { SvgProps } from 'react-native-svg';

interface ButtonProps extends PressableProps {
  secondary?: boolean;
  icon?: React.FC<SvgProps>;
}

export const Button = ({ children, secondary, ...props }: ButtonProps) => {
  const style = ({ pressed }: { pressed: boolean }) => ({
    ...styles.button,
    ...(secondary && styles.secondary),
    ...(pressed && styles.pressed),
  });

  console.log(JSON.stringify(style, null, 4));

  return (
    <Pressable style={style} {...props}>
      {children}
    </Pressable>
  );
};

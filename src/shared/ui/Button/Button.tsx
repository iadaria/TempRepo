import { Pressable, PressableProps, ViewStyle } from 'react-native';
import { styles } from './ButtonStyle';
import { SvgProps } from 'react-native-svg';

interface ButtonProps extends PressableProps {
  secondary?: boolean;
  icon?: React.FC<SvgProps>;
}

export const Button = ({ children, secondary, icon }: ButtonProps) => {
  const style = {
    ...styles.button,
    ...(secondary && styles.secondary),
  };

  console.log(JSON.stringify(style, null, 4));

  return (
    <Pressable style={style}>
      <>
        {icon && icon({})}
        {children}
      </>
    </Pressable>
  );
};

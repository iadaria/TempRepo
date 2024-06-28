import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';
import { styles } from './ButtonStyle';
import { SvgProps } from 'react-native-svg';
import { log } from '@src/6_shared/lib/debug/log';

interface ButtonProps extends PressableProps {
  secondary?: boolean;
  icon?: React.FC<SvgProps>;
  style?: ViewStyle;
}

export const Button = ({
  children,
  secondary,
  disabled,
  style: customeStyle,
  ...props
}: ButtonProps) => {
  const style = ({ pressed }: { pressed: boolean }) => ({
    ...styles.button,
    ...(secondary && styles.secondary),
    ...(pressed && styles.pressed),
    ...(disabled && styles.disabled),
    ...customeStyle,
  });

  //log('[button]', { style: style({ pressed: false }) });

  return (
    <Pressable style={style} {...props}>
      {children}
    </Pressable>
  );
};

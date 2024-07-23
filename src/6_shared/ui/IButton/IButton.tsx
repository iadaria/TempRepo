import React from 'react';
import { SvgProps } from 'react-native-svg';
import { Button } from '../Button';
import { styles } from './IButtonStyle';
import { PressableProps } from 'react-native';

interface IButtonProps extends PressableProps {
  icon: React.FC<SvgProps>;
  onPress: () => void;
  secondary?: boolean;
}

export function IButton({
  icon: SvgIcon,
  onPress,
  secondary,
  style,
  ...props
}: IButtonProps) {
  return (
    <Button
      style={styles.buttonIcon}
      onPress={onPress}
      secondary={secondary}
      {...props}>
      <SvgIcon />
    </Button>
  );
}

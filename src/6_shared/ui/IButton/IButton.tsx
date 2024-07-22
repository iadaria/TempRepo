import React from 'react';
import { SvgProps } from 'react-native-svg';
import { Button } from '../Button';
import { styles } from './IButtonStyle';

interface IButtonProps {
  icon: React.FC<SvgProps>;
  onPress: () => void;
  secondary?: boolean;
}

export function IButton({ icon: SvgIcon, onPress, secondary }: IButtonProps) {
  return (
    <Button style={styles.buttonIcon} onPress={onPress} secondary={secondary}>
      <SvgIcon />
    </Button>
  );
}

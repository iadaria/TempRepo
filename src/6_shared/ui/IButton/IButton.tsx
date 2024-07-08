import React from 'react';
import { SvgProps } from 'react-native-svg';
import { Button } from '../Button';
import { styles } from './IButtonStyle';

interface IButtonProps {
  icon: React.FC<SvgProps>;
  onPress: () => void;
}

export function IButton({ icon: SvgIcon, onPress }: IButtonProps) {
  return (
    <Button style={styles.buttonIcon} onPress={onPress}>
      <SvgIcon />
    </Button>
  );
}

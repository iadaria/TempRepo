import React from 'react';
import { SvgProps } from 'react-native-svg';
import { Button } from '../Button';
import { styles } from './IButtonStyle';

interface IButtonProps {
  icon: React.FC<SvgProps>;
}

export default function IButton({ icon: SvgIcon }: IButtonProps) {
  return (
    <Button style={styles.buttonIcon}>
      <SvgIcon />
    </Button>
  );
}

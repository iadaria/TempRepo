import React from 'react';
import { SvgProps } from 'react-native-svg';

export const opacityByFocus = (focused: boolean) => (focused ? 1 : 0.5);

interface TabBarProps {
  focused: boolean;
  icon: React.FC<SvgProps>;
}

export const TabBarIcon = ({ focused, icon }: TabBarProps) => {
  return icon({ opacity: focused ? 1 : 0.5 });
};

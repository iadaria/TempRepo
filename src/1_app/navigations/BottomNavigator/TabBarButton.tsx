import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import React, { ReactElement } from 'react';
import { Pressable } from 'react-native';
import { styles } from './TabBarButtonStyle';

export const TabBarButton = ({
  style: _,
  children,
  accessibilityState,
  ...props
}: BottomTabBarButtonProps) => {
  const selected = accessibilityState?.selected || false;
  const style = {
    ...styles.button,
    ...(selected ? styles.selected : styles.unselected),
  };
  const elements = (children as ReactElement)?.props.children as any[];
  const icon = elements[0];
  const label = elements[1];

  return (
    <Pressable style={style} {...props}>
      {icon}
      {selected && label}
    </Pressable>
  );
};

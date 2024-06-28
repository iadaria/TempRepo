import React from 'react';
import { Text } from 'react-native';
import { styles } from './AppTextStyle';

interface AppTextProps {
  children: React.ReactNode;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
}

export enum TextSize {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
}

export const AppText = (props: AppTextProps) => {
  const { children, ...hs } = props;

  const getSize = () => {
    const foundH = Object.entries(hs).find(h => h[1] === true);
    return (foundH?.[0] as TextSize) || TextSize.H3;
  };

  const size = getSize();
  return <Text style={[styles.text, styles[size]]}>{children}</Text>;
};

/**
 * Object.values(hs)
 */

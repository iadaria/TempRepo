import React from 'react';
import { Text } from 'react-native';
import { styles } from './AppTextStyle';
import { log } from '@src/6_shared/lib/debug/log';

interface AppTextProps {
  children: React.ReactNode;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  semi?: boolean;
  bold?: boolean;
  regular?: boolean;
}

type TextSize = 'h1' | 'h2' | 'h3';
type Font = 'regular' | 'bold' | 'medium';
type Item = [key: string, value: boolean];

export const AppText = ({ children, ...etc }: AppTextProps) => {
  log(AppText.name, children?.toString());

  const isHeader = (hs: Item) => hs[0].startsWith('h');
  const isFont = (_: Item) => !isHeader;

  function find<T>(sort: (item: Item) => Boolean): T | undefined {
    const property = Object.entries(etc)
      .filter(sort)
      .find(p => p[1]);

    return property?.[0] as T;
  }

  const size = find<TextSize>(isHeader) || 'h3';
  const font = find<Font>(isFont) || 'regular';

  return (
    <Text style={[styles.text, styles[size], styles[font]]}>{children}</Text>
  );
};

/*   const getSize = () => {
    const header = Object.entries(etc)
      .filter(isH)
      .find(h => h[1]);
    return (header?.[0] as TextSize) || 'h3';
  };

  const getFont = () => {
    const font = Object.entries(etc)
      .filter(isFont)
      .find(font => font[1]);
    return (font?.[0] as Font) || 'regular';
  };
 */

import React from 'react';
import { Text } from 'react-native';
import { styles } from './AppTextStyle';
import { log } from '@src/6_shared/lib/debug/log';

interface AppTextProps {
  children: React.ReactNode;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  medium?: boolean;
  bold?: boolean;
  regular?: boolean;
  orange?: boolean;
  grey?: boolean;
}

type Item = [key: string, value: boolean];
type TextSize = 'h1' | 'h2' | 'h3';
type Font = 'regular' | 'bold' | 'medium';

const fonts = ['medium', 'bold', 'regular'];
const colors = ['orange', 'grey'];

type Color = 'orange' | 'grey';

export const AppText = ({ children, ...etc }: AppTextProps) => {
  const isHeader = (property: Item) => property[0].startsWith('h');
  const isFont = (property: Item) => fonts.includes(property[0]);
  const isColor = (property: Item) => colors.includes(property[0]);

  function find<T>(sort: (item: Item) => Boolean): T | undefined {
    const property = Object.entries(etc)
      .filter(sort)
      .find(p => p[1]);

    return property?.[0] as T;
  }

  const size = find<TextSize>(isHeader) || 'h3';
  const font = find<Font>(isFont) || 'regular';
  const color = find<Color>(isColor) || 'white';
  //logline(AppText.name, { size, font });

  return (
    <Text style={[styles.text, styles[size], styles[font], styles[color]]}>
      {children}
    </Text>
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

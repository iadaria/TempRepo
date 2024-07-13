import React from 'react';
import { Text } from 'react-native';
import { styles } from './AppTextStyle';
import { log, logline } from '@src/6_shared/lib/debug/log';

type Item = [key: Font & TextSize & Color, value: boolean];

const fonts = ['medium', 'bold', 'regular'] as const;
type Font = (typeof fonts)[number];

const headers = ['h1', 'h2', 'h3', 'h4', 'h5'] as const;
type TextSize = (typeof headers)[number];

const colors = ['orange', 'grey'] as const;
type Color = (typeof colors)[number];

type TextSizeProps = Partial<Record<TextSize, boolean>>;

interface AppTextProps extends TextSizeProps {
  children: React.ReactNode;
  /* h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean; */
  medium?: boolean;
  bold?: boolean;
  regular?: boolean;
  orange?: boolean;
  grey?: boolean;
  center?: boolean; // TODO Deleting
}

export const AppText = ({ center, children, ...etc }: AppTextProps) => {
  const isHeader = (property: Item) => headers.includes(property[0]); //property[0].startsWith('h');
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

  const style = {
    ...styles.text,
    ...(center && styles.center), // Delete - isn't using
  };

  return (
    <Text style={[style, styles[size], styles[font], styles[color]]}>
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

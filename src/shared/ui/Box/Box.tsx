import { Pattern2 } from '@src/shared/assets/images';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Image as SvgImage } from 'react-native-svg';
import { styles } from './BoxStyle';

export interface BoxProps {
  children: React.ReactNode;
}

export const Box: FC<BoxProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <SvgImage
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          preserveAspectRatio="xMinYMin meet"
          href={Pattern2}
        />
      </Svg>
      <View style={styles.box}>{children}</View>
    </View>
  );
};

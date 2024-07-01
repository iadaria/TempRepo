import { Pattern2 } from '@src/6_shared/assets/images';
import React, { FC } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Svg, { Image as SvgImage } from 'react-native-svg';
import { styles } from './BoxStyle';

export interface BoxProps {
  children: React.ReactNode;
}

export const Box: FC<BoxProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Svg style={StyleSheet.absoluteFillObject}>
        <SvgImage
          x="10%"
          y="0%"
          width="90%"
          height="100%"
          preserveAspectRatio="xMinYMin"
          href={Pattern2}
        />
      </Svg>
      <View style={styles.box}>{children}</View>
    </View>
  );
};

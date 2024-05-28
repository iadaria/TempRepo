import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import theme from '@src/shared/lib/theme';
import Svg, {
  Defs,
  LinearGradient,
  Rect,
  Stop,
  Image as SvgImage,
} from 'react-native-svg';

import { styles as s } from './LogoStyle';
import { LogoIcon, Pattern } from '@src/shared/assets/images';

export const Logo = () => {
  const COLOR = theme.primary;
  return (
    <View style={s.logo}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <SvgImage
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid none"
          href={Pattern}
        />
        <Defs>
          <LinearGradient
            id="grad"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            gradientUnits="userSpaceOnUse">
            <Stop offset="0" stopColor={COLOR} stopOpacity={0} />
            <Stop offset="1" stopColor={COLOR} stopOpacity={1} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      <Image source={LogoIcon} style={{ marginTop: 47 }} />
      <Text style={s.logoTitle}>FoodNinja</Text>
      <Text style={s.title}>Deliever Favorite Food</Text>
    </View>
  );
};

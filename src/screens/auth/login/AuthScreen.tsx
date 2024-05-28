import {
  Pressable,
  sheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import { Icons } from '@src/shared/assets';
import Svg, {
  Defs,
  LinearGradient,
  Rect,
  Stop,
  Image as SvgImage,
} from 'react-native-svg';
import { Logo, Pattern } from '@src/shared/assets/images';
import { styles as s } from './AuthScreenStyle';
import theme from '@src/shared/lib/theme';

export const AuthScreen = () => {
  const Background = ({ children }: { children: React.JSX.Element[] }) => {
    const COLOR = theme.primary;
    return (
      <View style={s.logo}>
        <Svg height="100%" width="100%" style={sheet.absoluteFillObject}>
          <SvgImage
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid none"
            href={require('./pattern.png')}
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
        {children}
      </View>
    );
  };

  return (
    <SafeAreaView style={s.container}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Background>
        <Image source={Logo} style={{ marginTop: 47 }} />
        <Text style={s.logoTitle}>FoodNinja</Text>
        <Text style={s.title}>Deliever Favorite Food</Text>
      </Background>

      <View style={s.interface}>
        <View style={s.group}>
          <TextInput
            style={s.input}
            placeholder="Email"
            placeholderTextColor={theme.placeholder}
          />
          <TextInput
            style={s.input}
            placeholder="Password"
            placeholderTextColor={theme.placeholder}
          />
        </View>
        <Text style={s.text}>Or Continue With</Text>
        <View style={s.row}>
          <Pressable style={s.button}>
            <Icons.Facebook />
            <Text style={s.buttonText}>Facebook</Text>
          </Pressable>
          <Pressable style={s.button}>
            <Icons.Google />
            <Text style={s.buttonText}>Google</Text>
          </Pressable>
        </View>
        <Text style={s.text}>Forgot Your Password?</Text>

        <Pressable style={s.ownButton}>
          <Text style={s.buttonText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

/***
 * 1 Colors
 * - Add constant colors
 * - Change all colors
 *
 * 2 Replace styles to s
 *
 *
 */

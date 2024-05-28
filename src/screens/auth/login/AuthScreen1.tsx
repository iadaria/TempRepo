import {
  Pressable,
  StyleSheet,
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

const Background = ({ children }: { children: React.JSX.Element[] }) => {
  const FROM_COLOR = 'rgba(255, 255, 255, 0.02)';
  const TO_COLOR = '#0D0D0D';
  return (
    // Start as View
    /**
     * <LinearGradient id="Gradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="120" y2="0">
    <Stop offset="0" stopColor="red" stopOpacity="0.5" />
    <Stop offset="0.5" stopColor="green" stopOpacity="0.2" />
    <Stop offset="1" stopColor="blue" stopOpacity="0.5" />
   </LinearGradient>
     */
    <View style={styles.logo}>
      {/* <ImageBackground source={Pattern} style={styles.logo}> */}
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <SvgImage
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid none"
          href={require('./pattern.png')}
        />
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0" stopColor={FROM_COLOR} stopOpacity={0.001} />
            <Stop offset="1" stopColor={TO_COLOR} stopOpacity={1} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>
      {children}
      {/* </ImageBackground> */}
    </View>
  );
};

export const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Background>
        <Image source={Logo} style={{ marginTop: 47 }} />
        <Text style={styles.logoTitle}>FoodNinja</Text>
        <Text style={styles.title}>Deliever Favorite Food</Text>
      </Background>

      <View style={styles.interface}>
        <View style={styles.group}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="rgba(255, 255, 255, 0.3)"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="rgba(255, 255, 255, 0.3)"
          />
        </View>
        <Text style={styles.text}>Or Continue With</Text>
        <View style={styles.row}>
          <Pressable style={styles.button}>
            <Icons.Facebook />
            <Text style={styles.buttonText}>Facebook</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Icons.Google />
            <Text style={styles.buttonText}>Google</Text>
          </Pressable>
        </View>
        <Text style={styles.text}>Forgot Your Password?</Text>

        <Pressable style={styles.ownButton}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D', // 1
    //paddingHorizontal: 25,
  },
  logo: { flex: 0.9, alignItems: 'center' },
  logoTitle: {
    fontFamily: 'Viga-Regular',
    color: '#53E88B',
    fontSize: 40,
    textAlignVertical: 'bottom',
    marginBottom: -7,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    color: 'white',
    fontSize: 13,
    letterSpacing: 1,
  },
  interface: {
    flex: 1,
    rowGap: 21,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: 'blue',
  },
  group: { rowGap: 12, borderWidth: 1, borderColor: 'red' },
  // http://hex2rgba.devoth.com/
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    height: 57,
    paddingVertical: 21,
    paddingHorizontal: 28,
    color: 'white',
    fontFamily: 'Inter-Regular',
    borderRadius: 15,
  },
  //https://freefontsfamily.net/benton-sans-font/
  text: {
    color: 'white',
    fontFamily: 'Inter-Medium',
    //marginVertical: 20,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    letterSpacing: 0.5,
    alignSelf: 'center',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 21,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  row: {
    flexDirection: 'row',
    columnGap: 21,
  },
  ownButton: {
    height: 57,
    alignSelf: 'center',
    justifyContent: 'center',

    borderRadius: 15,
    width: '40%',
    backgroundColor: '#15BE77',
    marginTop: 36 - 21,
  },
});
// Dimentions?

// Create Layout Login Screen
// 1. show snippet and Ctrl + 5
// 2. add style for margin and color background
// 3 Download Semiold Inter/Viga for title
// https://dev.to/mitchiemt11/custom-fonts-in-react-native-pro-tip-4693
// get info and see full name
// 4 Create file react-native.config.js
// 4 npx react-native-reset -> yes
// 5 Export icon from Login Screen figma as img
// 5 Create a folder src/shared/assets/images and copy
/* - add images/index.ts and export the image
- create src/app/types/img.d.ts
- add <Image source/> in AuthScreen
*/
// 6 Add 2 textinput
/* Email */

/**
 * 7 Buttons
 * - download svg-s
 * - install https://github.com/kristerkari/react-native-svg-transformer
 * - Follow the documentation
 * - create file in icons and add them into index.ts
 * - install tranformer library and change metro file and add declare
 * - declare *.svg
 * - install react-native-svg
 * - add .svgrcc file
 * - recompile and show svg
 * - change facebook svg fill property
 */
// 8 Svg gradient
// 9 Status bar
// 10 custome theme https://dev.to/dedsyn4ps3/custom-theming-for-react-native-applications-2bem
// Start on IOS
/* Rectangle */

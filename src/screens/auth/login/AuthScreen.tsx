import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import { Icons, Images } from '@src/shared/assets';
import { Google } from '@src/shared/assets/icons';

export const AuthScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={Pattern} /> */}
      <View style={{ flex: 1 }}>
        <Image source={Images.Logo} />
        <Text style={styles.logoTitle}>FoodNinja</Text>
        <Text style={styles.title}>Deliever Favorite Food</Text>
      </View>

      <View style={styles.group}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="rgba(255, 255, 255, 0.3)"
        />
        <View style={{ height: 12 }} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgba(255, 255, 255, 0.3)"
        />
        <Text style={styles.text}>Or Continue With</Text>

        <View>
          <Pressable>
            <Google />
            <Text style={styles.text}>Google</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // screen: show figma color
    backgroundColor: '#0D0D0D', // 1
    // screen: show figma margin
    // marginHorizontal: 25, // 2
    // paddingHorizontal: 25,
    flex: 1,
    paddingHorizontal: 25,
    //flexDirection: 'column',
    //alignItems: 'center',
  },
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
  group: { flex: 1 },
  // http://hex2rgba.devoth.com/
  input: {
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    height: 57,
    paddingVertical: 21,
    paddingHorizontal: 28,
    color: 'white',
    fontFamily: 'Inter-Regular',
  },
  //https://freefontsfamily.net/benton-sans-font/
  text: {
    color: 'white',
    fontFamily: 'Inter-Medium',
    borderWidth: 1,
    borderColor: 'red',
    marginVertical: 20,
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
 */

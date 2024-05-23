import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Logo, Pattern } from '@src/shared/assets/images';

export const AuthScreen = () => {
  return (
    <View>
      <Image source={Pattern} />
      <View
        style={{
          position: 'absolute',
          zIndex: 2,
          backgroundColor: 'rgba(0,0,0,0.5)',
          top: 0,
          height: '100%',
          width: '100%',
        }}>
        <Text>Hey</Text>
      </View>

      <Image source={Logo} />
      <Text style={styles.logoTitle}>FoodNinja</Text>
      <Text style={styles.title}>Deliever Favorite Food</Text>
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
    flex: 1, // 3
    alignItems: 'center',
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
});

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

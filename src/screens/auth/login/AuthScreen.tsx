import {
  Pressable,
  Text,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React from 'react';
import { Icons } from '@src/shared/assets';

import { Logo } from '@src/shared/ui/Logo/Logo';
import { styles as s } from './AuthScreenStyle';
import { colors } from '@src/shared/lib/theme';

export const AuthScreen = () => {
  return (
    <SafeAreaView style={s.container}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Logo />
      <View style={s.interface}>
        <View style={s.group}>
          <TextInput
            style={s.input}
            placeholder="Email"
            placeholderTextColor={colors.placeholder}
          />
          <TextInput
            style={s.input}
            placeholder="Password"
            placeholderTextColor={colors.placeholder}
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
 * 3 As we use Logo in two/few places Let's move it into separate shared component
 */

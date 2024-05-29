import { Icons } from '@src/shared/assets';
import React from 'react';
import { SafeAreaView, StatusBar, Text, TextInput, View } from 'react-native';

import { colors } from '@src/shared/lib/theme';
import { Button } from '@src/shared/ui/Button';
import { Logo } from '@src/shared/ui/Logo/Logo';
import { styles as s } from './AuthScreenStyle';
import { Facebook } from '@src/shared/assets/icons';

interface InputProps {
  placeholder?: string;
}

const Input = ({ placeholder }: InputProps) => {
  return (
    <TextInput
      style={s.input}
      placeholder={placeholder}
      placeholderTextColor={colors.placeholder}
    />
  );
};

export const AuthScreen = () => {
  return (
    <SafeAreaView style={s.container}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Logo />
      <View style={s.interface}>
        <View style={s.group}>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </View>
        <Text style={s.text}>Or Continue With</Text>
        <View style={s.row}>
          <Button>
            <Icons.Facebook />
            <Text style={s.buttonText}>Facebook</Text>
          </Button>

          <Button>
            <Icons.Google />
            <Text style={s.buttonText}>Google</Text>
          </Button>
        </View>
        <Text style={s.text}>Forgot Your Password?</Text>

        <View style={s.row}>
          <Button secondary>
            <Text style={s.buttonText}>Login</Text>
          </Button>
        </View>
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
 *
 * - Lets create common Input component
 * - Create commpon Button component
 * Refactor button 1
 * Then move into separate file: Button.tsx & ButtonStyle.ts
 * Move styles of button
 * Replace the first button
 * Then replace the second button
 *
 * 4 Use React Hook Form
 * - npm install react-hook-form
 */

import { Icons } from '@src/shared/assets';
import React from 'react';
import {
  Pressable,
  PressableProps,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';

import { colors } from '@src/shared/lib/theme';
import { Logo } from '@src/shared/ui/Logo/Logo';
import { styles as s } from './AuthScreenStyle';
import { TypeColor } from '@src/shared/lib/theme/colors';

interface ButtonProps extends PressableProps {
  type?: TypeColor;
}

const Button = ({ children, type = TypeColor.Prime }: ButtonProps) => {
  return <Pressable style={s.button}>{children}</Pressable>;
};

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
          <Pressable style={s.ownButton}>
            <Text style={s.buttonText}>Login</Text>
          </Pressable>
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
 *
 * 4 Use React Hook Form
 * - npm install react-hook-form
 */

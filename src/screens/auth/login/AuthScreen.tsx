import { Icons } from '@src/shared/assets';
import React from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';

import { colors } from '@src/shared/lib/theme';
import { Button } from '@src/shared/ui/Button';
import { Logo } from '@src/shared/ui/Logo/Logo';
import {
  Control,
  SubmitHandler,
  useController,
  useForm,
} from 'react-hook-form';
import { styles as s } from './AuthScreenStyle';

type LoginDto = {
  email: string;
  password: string;
};

interface InputProps {
  placeholder?: string;
  name: keyof LoginDto; // the same type as "email" | "password"
  control: Control<LoginDto>;
}

const Input = ({ placeholder, name, control }: InputProps) => {
  const { field } = useController({
    control,
    name,
  });
  return (
    <TextInput
      style={s.input}
      value={field.value}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      placeholder={placeholder}
      placeholderTextColor={colors.placeholder}
    />
  );
};

export const AuthScreen = () => {
  const { control, handleSubmit } = useForm<LoginDto>();

  const onLogin: SubmitHandler<LoginDto> = data =>
    Alert.alert('', JSON.stringify(data));

  return (
    <SafeAreaView style={s.container}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Logo />
      <View style={s.interface}>
        <View style={s.group}>
          <Input name="email" control={control} placeholder="Email" />
          <Input name="password" control={control} placeholder="Password" />
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
          <Button secondary onPress={handleSubmit(onLogin)}>
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
 * - Create commpon Button component
 * Refactor button 1
 * Then move into separate file: Button.tsx & ButtonStyle.ts
 * Move styles of button
 * Replace the first button
 * Then replace the second button
 *
 * add pressed style for button
 *
 *  ! Only then - Lets create common Input component
 * - simple refactor in the same file
 * 4 Use React Hook Form
 * - npm install react-hook-form
 *
 * 1 Added the simple example for Input from the doc site
 * 2 Lets add the type
 */

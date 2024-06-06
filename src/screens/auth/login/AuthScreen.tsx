import { Icons } from '@src/shared/assets';
import React from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
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
  FieldError,
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
  error?: FieldError;
}

const Input = ({ placeholder, name, control, error }: InputProps) => {
  const { field } = useController({
    control,
    name,
    rules: {
      required: { message: 'Required!', value: true },
    },
  });

  console.log({ error });

  const style = {
    ...s.input,
    ...(error && s.errorInput),
  };

  return (
    <>
      <TextInput
        style={style}
        value={field.value}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
      />
      {error && <Text style={s.error}>{error?.message}</Text>}
    </>
  );
};

export const AuthScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDto>();

  const onLogin: SubmitHandler<LoginDto> = data =>
    Alert.alert('', JSON.stringify(data));

  //console.log({ errors });

  return (
    <SafeAreaView style={s.container}>
      <StatusBar backgroundColor={'transparent'} translucent />
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Logo />
        <View style={s.interface}>
          <View style={s.group}>
            <Input
              name="email"
              control={control}
              placeholder="Email"
              error={errors.email}
            />
            <Input
              name="password"
              control={control}
              placeholder="Password"
              error={errors.password}
            />
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
      </ScrollView>
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
 * - rules: https://www.react-hook-form.com/api/useform/register/#options
 * - add required rules for input
 *
 * 3 Got a problem with interface on Android
 *
 *
 *
 *
 *
 *
 */

import { Icons } from '@src/6_shared/assets';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { useAppDispatch } from '@src/1_app/hooks';
import { login } from '@src/5_entities/auth/auth.services';
import { LoginDto } from '@src/5_entities/auth/auth.types';
import { Button } from '@src/6_shared/ui/Button';
import { Input } from '@src/6_shared/ui/Input';
import { Logo } from '@src/6_shared/ui/Logo/Logo';
import { SubmitHandler, useForm } from 'react-hook-form';
import { styles as s } from './AuthScreenStyle';

export const AuthScreen = () => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginDto>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    //resolver: yupResolver(loginSchema),
  });

  const onLogin: SubmitHandler<LoginDto> = data => dispatch(login(data));
  //Alert.alert('', JSON.stringify(data));

  //console.log({ errors, isValid });

  const disabled = !isValid;

  return (
    <SafeAreaView style={s.container}>
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
 * add scrollView
 *
 * 4 Disable button
 * Don't have error after render
 *
 * 5 Add next rules for password and email
 * - add yup
 * - add @hookform/resolvers
 *
 * 6 Checking on server side
 *
 *
 *
 */

import {
  Control,
  FieldError,
  FieldValues,
  Path,
  useController,
} from 'react-hook-form';
import { styles as s, styles } from './InputStyle';
import { Text, TextInput, View } from 'react-native';
import { colors } from '@src/shared/lib/theme';
import { SvgProps } from 'react-native-svg';
import { useState } from 'react';
//import { LoginDto } from '@src/features/auth/auth.types';

interface InputProps<T extends FieldValues> {
  placeholder?: string;
  name: Path<T>; // the same type as "email" | "password"
  control: Control<T>;
  licon?: React.FC<SvgProps>;
  error?: FieldError;
}

export function Input<T extends FieldValues>({
  placeholder,
  name,
  control,
  error,
  licon: LeftIcon,
}: InputProps<T>) {
  const [leftIcon, setLeftIcon] = useState(Boolean(LeftIcon));
  const { field } = useController({
    control,
    name,
  });

  const wrapper = {
    ...s.wrapper,
    ...(error && s.errorInput),
    ...(leftIcon && s.liconwrapper),
  };

  return (
    <View style={wrapper}>
      {leftIcon && LeftIcon && <LeftIcon style={styles.licon} />}
      <TextInput
        style={s.input}
        value={field.value}
        onFocus={() => setLeftIcon(false)}
        onChangeText={field.onChange}
        onBlur={() => {
          field.onBlur();
          setLeftIcon(true);
        }}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
      />
      {error && <Text style={s.error}>{error?.message}</Text>}
    </View>
  );
}

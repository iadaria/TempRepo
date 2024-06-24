import {
  Control,
  FieldError,
  FieldValues,
  Path,
  useController,
} from 'react-hook-form';
import { styles as s } from './InputStyle';
import { Text, TextInput } from 'react-native';
import { colors } from '@src/shared/lib/theme';
//import { LoginDto } from '@src/features/auth/auth.types';

interface InputProps<T extends FieldValues> {
  placeholder?: string;
  name: Path<T>; // the same type as "email" | "password"
  control: Control<T>;
  error?: FieldError;
}

export function Input<T extends FieldValues>({
  placeholder,
  name,
  control,
  error,
}: InputProps<T>) {
  const { field } = useController({
    control,
    name,
  });

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
}
